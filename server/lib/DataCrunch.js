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

const log = message => console.log(message);

module.exports = class DataCrunch extends EventEmitter {

	constructor(data, coords){
		super();
		this._coords = coords;
		this._tempCoords = ['51.406545','0.161767']			//<-- Need to remove temp coords
		this._data = data;
		this._streets = {};
		this._monthlyFigures = {};
		this._closest5 = {}
		this.selectedStreet = {
			types: {},
			openToClose: {}
		}; //<-- this in not being used but needs to be at some point
		this.testSelectedStreet = [];
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

		const data = this._data;
		const [ uLat, uLng ] = this._tempCoords;

		for(var i = 0, len = data.length; i < len; i++){

			//<-- Need to really remove these to as they should
			// part of the struct
			//20/05 <-- Hacersine formula is not correctly determing the
			//distance
			const { latitude: lLat, longitude: lLng } = data[i].location;
			data[i].spatial = distance(uLat,uLng,lLat,lLng)											   //this has got to be moved out and done in the sort somewhere
			//console.log(data[i].spatial); <-- either 1 - 0
			//console.log(lLat,lLng, uLat, uLng);

			this._collateType(data[i]);
			this._collateMonthlyFigures(data[i]);
			this._collateStreets(data[i]);
			this._hotOrNot(data[i]);
		}

		//hand back to caller on the next
		process.nextTick(() => {
			this.emit('managerComplete', {
				allStreetsMonthly: this._monthlyFigures,
				allStreetsType: this._type,
				allStreetsSolved: this._openToClose,
				allStreetsbyFigures: this._streets,
				userStreetCrimes: this.testSelectedStreet
			})
		})
	}

	//Split crimes into various categories
	_collateType(entity){
		if(this._type[entity.category]){
			this._type[entity.category] += 1;
		}
		else{
			this._type[entity.category] = 1;
		}
	}

	//Return overall figures for crime for each month
	_collateMonthlyFigures(entity){
		if(this._monthlyFigures[entity.month]){
			this._monthlyFigures[entity.month] += 1;
		}
		else{
			this._monthlyFigures[entity.month] = 1;
		}
	}

	//Collate overall yearly crime figures for each street
	_collateStreets(entity){
		let location = this._getStreet(entity.location.street.name);

		if(location === 'Selah Drive'){
			this._specificStreet(entity);
		}

		if(this._streets[location]){
			this._streets[location] += 1;
		}
		else{
			this._streets[location] = 1;
		}
	}

	// <-- Not complete. Collate outcomes to determine
	//percentage of solved/unsolved crimes
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
					//console.log(outcome)
		}
	}

	//Collate all street crime fir exact spot given by user
	_specificStreet(dataObj){

		//add the type of crime

		//add the ouctome of the crime

		//Temp to be moved
		this.testSelectedStreet.push(dataObj);

	}

	//<-- Move this to dataStruct
	_spatialSort(){

	}

	_closestFive(entity){

	}

	//<-- Slice
	_collateStreetFigure(){

	}

	//Return highest roads of crime in set
	//vicinity of user
	_collateHottestSpots(){

	}

	//Determine burglary figure based on previous
	//searches <-- Mongo or SQL
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

//To be removed <- poor
const tempToArray = obj => {
	for(x in obj){
		log(x, ':', obj[x]);
	}
}
