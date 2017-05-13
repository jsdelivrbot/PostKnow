/**
*
* @class:  Manipulate incoming data object to retrieve statistics of crime
*          in an area.
*
*/

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
const distance = require('./utils/spatial').distance;
const outcomes = require('./utils/searchCriteria').outcomes;

module.exports = class DataCrunch extends EventEmitter {

	constructor(data, coords){
		super();
		this._coords = coords;
		this._data = data;
		this._streets = {};
		this._monthlyFigures = {};
		this._closest5 = {}
		this._openToClose = {
			unsuccessful: 0,
			successfull: 0,
			pending: 0
		};
		this._type = {};
	}

	// Public API
	//===========

	runManager(){
		this._cycleData();
	}

	//Cycle through entries
	_cycleData(){
		console.log('_cycleData called');
		const data = this._data;
		for(var i = 0, len = data.length; i < len; i++){
			this._collateType(data[i]);
			this._collateMonthlyFigures(data[i]);
			this._collateStreets(data[i]);
			this._hotOrNot(data[i]);
		}
		console.log(this._openToClose);
		this.emit('managerComplete', {
			monthly: this._monthlyFigures,
			type: this._type
		})
	}


	_collateType(entity){
		if(this._type[entity.category]){
			this._type[entity.category] += 1;
		}
		else{
			this._type[entity.category] = 1;
		}
	}

	_collateMonthlyFigures(entity){
		if(this._monthlyFigures[entity.month]){
			this._monthlyFigures[entity.month] += 1;
		}
		else{
			this._monthlyFigures[entity.month] = 1;
		}
	}

	_collateStreets(entity){
		let location = this._getStreet(entity.location.street.name);
		if(this._streets[location]){
			this._streets[location] += 1;
		}
		else{
			this._streets[location] = 1;
		}
	}

	_hotOrNot(entity){
		let outcome;
		try{
			outcome = entity.outcome_status.category || null;
		}
		catch(e){
			outcome = null;
		}
		switch(true)
		{
			case outcomes.failure.includes(outcome):
				this._openToClose.unsuccessful++;
				break;
			case outcomes.success.includes(outcome):
				this._openToClose.successfull++;
				//console.log(outcome);
				break;
			case outcomes.pending.includes(outcome):
				this._openToClose.pending++;
				//console.log(outcome)
				break;
			default:
					console.log(outcome)
		}
	}

	_spatialSort(){

	}

	_closestFive(entity){

	}

	_collateStreetFigure(){

	}

	_collateHottestSpots(){

	}

	_spatialBurglary(){

	}

	_getStreet(description){
		if(description.includes('near')){
			return description.split('near ')[1];
		}
		return description;
	}

	//Collate crime figures for each month


}
