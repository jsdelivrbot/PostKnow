/**
*
* @class:  Main class to manage APImanager and DataManager.
*
*					Removed while testing with stub data
*					1) line 19 + line 21
*
*/
const fs = require('fs');

const EventEmitter = require('events').EventEmitter;
const APIManager = require('./APImanager');
const DataManager = require('./DataCrunch');

const log = message => console.log(message);

module.exports = class CrimeManager extends EventEmitter {
	constructor(lat, lng) {
		super();
		this._coords = [lat, lng];
		this._apiManager = new APIManager(lat, lng);
		this._dataManager = null;
		//this._runCrimeManager();
		this._runTestCrimeManager();
	}

	// TEST API
	//=========

	//Temporarily work with stub data --> Lead into l65 processAPIResponse() simulating
	//successfull response from APIManager on line 56.
	_runTestCrimeManager() {
		fs.readFile('./stub.txt', 'utf8', (err, data) => {
			if (err) {
				console.log('cannot read the file');
				throw err;
			}
			const cmobj = JSON.parse(data);
			this._processAPIresponse(cmobj);
		});
	}

	// Write real data to stub file for testing purposes
	_writeStubData(data) {
		fs.writeFile('stub.txt', JSON.stringify(data), 'utf8', err => {
			if (err) {
				console.log('Error writing to file');
				throw err;
			}
			console.log('file saved');
		});
	}

	// Public API
	//===========

	_runCrimeManager() {
		this._callAPImanager();
	}

	// Private methods
	//================

	//Call API manager to traverse external API and collate data into
	//single array
	_callAPImanager() {
		this._apiManager.runManager();
		this._apiManager.on('managerComplete', response => {
			//this._writeStubData(response.data);
			this._processAPIresponse(response.data);
		});
		this._apiManager.on('managerError', error => {
			this._processServerError(error);
		});
	}

	//Check data response to ensure correct type and rough
	//estimate of numbers before passing to data manager
	_processAPIresponse(data) {
		if (Array.isArray(data)) {
			this._callDataManager(data);
		} else {
			this.processServerError('Malformed data returned from the server');
		}
	}

	//Send request over to data manager to carry out sorting <-- EMIT on nextTick
	// as results returned after bind!
	_callDataManager(data) {
		console.log('the coords are --> ', this._coords);
		this._dataManager = new DataManager(data, this._coords);
		this._dataManager.runManager();
		this._dataManager.on('managerComplete', response => {
			log('data manager is ready to emit to location check');
			this.emit('sendResponse', response);
		});
		this._dataManager.on('managerError', err => processServerError(err));
	}

	//Generic method to process server error
	_processServerError(error) {
		console.log(`error : ${error}`);
	}
};
