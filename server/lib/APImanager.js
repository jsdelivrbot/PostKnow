/**
*
* @class:        Cards for individual sections to be contained within
*                each seperate album
* @incomplete:   Currently API calls are made 2 months to prior to current
*                date. Intial code tested for most recent month but cost too
*                much in request time and code dependency. Find a better way
*              	 if possible to provide (current month - 1) data;
*/

const config = require('../../conf');
const axios = require('axios');
const EventEmitter = require('events').EventEmitter;

module.exports = class APImanager extends EventEmitter {
	//Assign class variables
	constructor(lat, lng) {
		super();
		this._apiString = `${config.BASE_START}&lat=${lat}&lng=${lng}&date=`;
		this._currentDate = `${new Date().getFullYear()}-${new Date().getMonth()}`;
		this._date = this._monthIDGenerator();
	}

	// Public API
	//===========

	runManager() {
		this._runYearRequest()
			.then(data => {
				//process the data into objects when returned by external
				// API
				const crimeStats = this._createOverallCrimeObject(data);

				//emit details to Crime manager
				this.emit('managerComplete', { data: crimeStats });
			})
			.catch(error => this.emit('managerError', error));
	}

	// Private Methods
	//================

	//Generator to hold and pass dates to be used
	//in multiple API queries
	* _monthIDGenerator() {
		let current = this._currentDate;
		while (true) {
			current = this._stepBackMonth(current);
			yield current;
		}
	}

	//Generate yearly request in seperate month API calls
	_generateRequestArray() {
		const date = this._monthIDGenerator();
		const requestArray = [];
		for (let i = 1; i < 12; i++) {
			requestArray.push(axios.get(this._apiString + date.next().value));
		}
		return requestArray;
	}

	//Return month in correct format for API
	//previous month
	_stepBackMonth(date) {
		const month = parseInt(date.split('-')[1]);
		if (month == 1) {
			return `${parseInt(date.split('-')[0]) - 1}-12`;
		}
		return date.substring(0, 5) + (month - 1);
	}

	//Create array containg 12 individual API requests for
	//monthly crime data
	_createMonthArray() {
		const date = this._monthIDGenerator(),
			overall = {},
			allRequests = [];
		for (let i = 0; i < 12; i++) {
			allRequests.push(axios.get(this._apiString + date.next().value));
		}
		return allRequests;
	}

	//cycle through the array data (each monnth is embedded in object) - then push each
	// month as an object into an array and retrun to caller
	_createOverallCrimeObject(arrayOfCrimes) {
		const allCrimes = [];
		arrayOfCrimes.forEach(month => {
			month.data.forEach(crime => {
				allCrimes.push(crime);
			});
		});
		return allCrimes;
	}

	//Run concurrent API requests and save to
	//data object.
	_runYearRequest() {
		const requestArray = this._createMonthArray();
		return new Promise((resolve, reject) => {
			Promise.all(requestArray)
				.then(values => {
					resolve(values);
				})
				.catch(error => {
					console.log(`error in _runYearRequest : ${error}`);
					reject(error);
				});
		});
	}
}; //end of class
