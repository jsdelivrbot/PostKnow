/**
*
* @summary: Logic for area check controller. Query gov API x amount of times
            to build new data objects and query google API to confirm
*           user location.
*/

const fs = require("fs");

const axios = require("axios");
const CrimeManager = require("../lib/CrimeManager");
const GOOG_BASE = require("../../conf").GOOG_BASE;

const log = message => console.log(message);

/**
* @event : Handle API calls to stats API
*/
exports.areaSearch = (req, res, next) => {
	const { lat, lng } = req.query;

	//simulate sending dummy.txt while work on the stats of project
	const Manager = new CrimeManager(lat, lng);

	//<-- Time res by weekend
	Manager.on("sendResponse", response => {
		console.log("call maanger");
		res.json({
			test: true,
			message: response
		});
	});
};

/**
* @event : Retrieve full formatted address of postcode provided by
*          user and return to client for confirmation
*/
exports.postcodeCheck = (req, res, next) => {
	const encodedLocation = `${GOOG_BASE}${encodeURIComponent(
		req.query.postcode
	)}`;

	axios
		.get(encodedLocation)
		.then(response => {
			if (checkResponse(response)) {
				res.json({ error: false, location: response.data });
			} else {
				res.json({ error: true, message: "Location could not be found" });
			}
		})
		.catch(error => {
			console.log(errString("postcodeCheck", error));
			res.json({ error: true, message: error });
		});
};

// Private functions
//==================

//Check response to ensure location exists and
//status returned 200
function checkResponse(response) {
	if (response.data.status != "OK") {
		return false;
	}
	const address = response.data.results[0].formatted_address || "Undefined";
	if (address.includes("Undefined")) {
		return false;
	}
	return true;
}

//Format server error string
const errString = (func, message) => {
	const date = new Date();
	return `@${new Date()} --> Error in ${func}\n${message}`;
};
