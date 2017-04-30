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
	}

	// Public API
	//===========

	runManager(){
		
	}

}
