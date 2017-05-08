/**
*
* @class:  Manipulate incoming data object to retrieve statistics of crime
*          in an area.
*
*/

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

module.exports = class DataCrunch extends EventEmitter {

	constructor(data){
		super();
		this._data = data;
		this._monthlyFigures = {};
		this._openToClose = [];
		this._type = {};
	}

	// Public API
	//===========

	runManager(){
		this._cycleData();
	}

	_cycleData(){
		console.log('_cycleData called');
		const data = this._data;
		for(var i = 0, len = data.length; i < len; i++){
			this._collateType(data[i]);
			this._collateMonthlyFigures(data[i]);
		}
		console.log(this._monthlyFigures);
		console.log(this._type);
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

	_collateStreetFigure(){

	}

	_collateHottestSpots(){

	}

	//Collate crime figures for each month





}
