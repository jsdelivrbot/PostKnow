/**
*
* @class:  Main class to manage APImanager and DataManager.
*
*/

const EventEmitter = require('events').EventEmitter;

const APIManager = require('./APImanager');
const DataManager = require('./DataCrunch');

module.exports = class CrimeManager extends EventEmitter {

	constructor(lat,lng){
		super();
		this._apiManager = new APIManager(lat,lng);
		this._dataManager = new DataManager();
		this._runCrimeManager();
	}

	// Public API
	//===========

	_runCrimeManager(){
		this._callAPImanager();
	}

	// Private methods
	//================


	//
	_callAPImanager(){
		this._apiManager.runManager();
		    this._apiManager.on('managerComplete', (response) => {
					console.log('response')
					this._processAPIresponse(response.data)
				})
				this._apiManager.on('managerError', (error) => {
					this._processServerError(error);
				});
	}

	//Check data response to ensure correct type and rough
	//estimate of numbers before passing to data manager
	_processAPIresponse(data){
		console.log('in the proceess')
		console.log(data);
	}

	//Send request over to data manager to carry out sorting
	_callDataManager(data){
		this._dataManager.runManager(data)
				.on('managerComplete', (response) => {

				})
				.on('managerError', (err) => processServerError(err) );
	}

	//Generic method to process server error
	_processServerError(error){
		console.log('error : ' + error);
	}






}
