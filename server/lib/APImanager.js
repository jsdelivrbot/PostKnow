//
// @class: Manage server side data requests and responses to and from
//         API.
//

const config = require('../privateConfig');
import axios from 'axios';

module.exports = class APImanager {

	//Assign class variables
	constructor(date,lat,lng){
		this._apiConfig = {
			base: config.BASE_API,
			coords: `&lat=${lat}&lng=${lng}`
		}
		this._APIdata = {};
		this._currentDate = new Date().getFullYear() + '-' + (new Date().getMonth()-1);
		this._datesArray = [];
		_runManager();
	}

	//Run manager to retrive data for
	//crime manager
	_runManager(){
		//Run API manager in some sort of promise to allow
		//crime manager to be alerted.
	}

	//Return API format for current date  <-- May be able to remove if left in constructor
	_currentDate(){
		return new Date().getFullYear() + '-' + (new Date().getMonth()-1);
	}

	//Generator to hold and pass dates to be used
	//in multiple API queries
	*_monthIDGenerator(currentDate){
		let current = currentDate;
		while(true){
			current = this._stepBackMonth(current);
			yield current;
		}
	}

	//Return month in correct format for API
	//previous month
	_stepBackMonth(date){
		month = parseInt(date.split('-')[1]);
		if(month == 1){
			return (parseInt(date.split('-')[0]) - 1) + '-12';
		}
		else{
			return date.substring(0,5) + (month - 1);
		}
	}

	//Return most recent month API holds
	//data for
	_getMostRecentMonth(date){
		nextMonth = this._monthIDGenerator();
		date = date;
		recentDate = false;
		while(recentDate === false){
			this._getData(date).then((response) => {
				if(response){
					recentDate = true;
				}
				else{
					date = nextMonth.next().value();
				}
			})
			return date;
		}
	}

	//Call API to test if month has been added
	_getData(date){
		const BASE = this._apiConfig.base;
		return new Promise((resolve, reject) => {
			axios.get(BASE+date).then((response) => {
				if(response.data.length > 1){
					resolve(true);
				}
				else{
					resolve(false);
				}
			})
		})
	}


	//Generate array containing axios
	//requests
	_generateRequestArray(newestMonth){

	}

	//Run concurrent API requests and save to
	//data object.
	_runYearRequest(requestArray){

	}

}
