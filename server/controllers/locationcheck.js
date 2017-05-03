/**
*
* @summary: Logic for area check controller. Query gov API x amount of times
            to build new data objects and query google API to confirm
*           user location.
*/

const axios = require('axios');
const CrimeManager = require('../lib/CrimeManager').CrimeManager;
const GOOG_BASE = require('../../conf').GOOG_BASE;

/**
* @event : Handle API calls to stats API
*/
exports.areaSearch = (req,res,next) => {

  const { coordinates } = req.body;

	//call crime manager

	//on emit of results send back to client

}

/**
* @event : Retrieve full formatted address of postcode provided by
*          user and return to client
*/
exports.postcodeCheck = (req,res,next) => {

	const encodedLocation = `${GOOG_BASE}${encodeURIComponent(req.query.postcode)}`;

	axios.get(encodedLocation)
			 .then((response) => {
				 if(checkResponse(response)){
					 res.json({ error: false, location: response.data})
				 }
				 else{
					res.json({ error: true, message: 'Location could not be found' })
				 }
			 })
			 .catch((error) => {
				 console.log(errString('postcodeCheck', error));
				 res.json({ error: true, message: error })
			 })
}


// Private functions
//==================

//Check response to ensure location exists and
//status returned 200
function checkResponse(response){
	//return on bad response
	if(response.data.status != 'OK'){
		return false
	}
	//return on undefined address
	const address = response.data.results[0].formatted_address || 'Undefined';
	if(address.includes('Undefined')){
		return false
	}
	return true;
}

//Format server error string
const errString = (func, message) => {
	const date = new Date();
	return `@${new Date()} --> Error in ${func}\n${message}`;
}
