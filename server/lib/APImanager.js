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
const fs = require('fs');

//Debug methods <-- To be removed
const log = message => console.log(message);

module.exports = class APImanager extends EventEmitter {

	//Assign class variables
	constructor(lat,lng){
		super();
		this._apiString = `${config.BASE_START}&lat=${lat}&lng=${lng}&date=`
		this._currentDate = new Date().getFullYear() + '-' + (new Date().getMonth());
		this._date = this._monthIDGenerator();
	}

	// Public API
	//===========


	runManager(){

		this._runYearRequest().then((data) => {

			//process the data into objects when returned by the
			const crimeStats = this._createOverallCrimeObejct(data);

			//emit details to Crime manager
			this.emit('managerComplete', { data: crimeStats });

		})
		.catch((error) => this.emit('managerError', error))
	}


	// Private Methods
	//================


	//Generator to hold and pass dates to be used
	//in multiple API queries
	*_monthIDGenerator(){
		let current = this._currentDate;
		while(true){
			current = this._stepBackMonth(current);
			yield current;
		}
	}

	//Generate yearly request in seperate month API calls
	_generateRequestArray(){
		let date = this._monthIDGenerator()
		let requestArray = [];
		for(let i = 1; i < 12; i++){
			requestArray.push(
				axios.get(this._apiString+date.next().value)
			)
		}
		return requestArray;
	}


	//Return month in correct format for API
	//previous month
	_stepBackMonth(date){
		const month = parseInt(date.split('-')[1]);
		if(month == 1){
			return (parseInt(date.split('-')[0]) - 1) + '-12';
		}
		else{
			return date.substring(0,5) + (month - 1);
		}
	}

	//Create array containg 12 individual API requests for
	//monthly crime data
	_createMonthArray(){
		const date = this._monthIDGenerator(), overall = {}, allRequests = [];
		for(var i = 0; i < 12; i++){
			allRequests.push(axios.get(this._apiString+date.next().value))
		}
		return allRequests
	}


	//Collate array of crime objects into single object
	//and return
	_createOverallCrimeObejct(arrayOfCrimes){
		 const allCrimes = [];
		 arrayOfCrimes.forEach((month) => {
			 month.data.forEach((crime) => {
				 allCrimes.push(crime);
			 })
		 })
		 return allCrimes;
	}

	logValues(arr){
		const obj = []
		log(arr.length);
		arr.forEach((month) => {
			month.data.forEach((crime) => {
				obj.push(crime);
				console.log(crime.category)
			})
		})

	}

	//Run concurrent API requests and save to
	//data object.
	_runYearRequest(){
		const requestArray = this._createMonthArray();
		return new Promise((resolve,reject) => {
			Promise.all(requestArray).then((values) => {
				resolve(values);
			}).catch((error) => {
				log('error in _runYearRequest : ' + error)
				reject(error);
			});
		});
	}

}//end of class




/* ====================== METHODS REMOVED =================

_getMostRecentMonthlyData(date){	//<-- Finish this
	var date = date;
	this._getData(this._apiString+date).then((response) => {
		if(response){
			console.log(response);
			return date
		}
		else{
			this._getMostRecentMonthlyData(this._date.next().value)
		}
	})
}


//Call API to test if data held in response for a
//given month
_getData(date){
	const BASE = this._apiConfig.base;
	return new Promise((resolve, reject) => {
		axios.get(BASE+date).then((response) => {
			if(response.data.length > 1){
				resolve(date);
			}
			else{
				resolve(false);
			}
		})
	})
}

====================================================== */
