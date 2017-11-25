/**
*
* @class:  Manipulate incoming data object to retrieve statistics of crime
*          in an area.
*
*/

const EventEmitter = require('events').EventEmitter;
const haversine = require('haversine');
const outcomes = require('./utils/searchCriteria').outcomes;

module.exports = class DataCrunch extends EventEmitter {
	constructor(data, coords) {
		super();
		this._coords = { latitude: coords[0], longitude: coords[1] };
		this._data = data;
		this._streets = {};
		this._monthlyFigures = {};
		this._mapsData = {};
		this.selectedStreet = {
			types: {},
			openToClose: {}
		}; //<-- this in not being used but needs to be at some point
		this.testSelectedStreet = [];
		this._openToClose = {
			unsuccessful: 0,
			successfull: 0,
			pending: 0,
			notProvided: 0
		};
		this._type = {};
	}

	// Public API
	//===========

	runManager() {
		this._cycleData();
	}

	//Cycle through entries
	_cycleData() {
		const data = this._data;

		for (let i = 0, len = data.length; i < len; i++) {
			const { latitude, longitude } = data[i].location;

			data[i].spatial = haversine(
				this._coords,
				{ latitude, longitude },
				{ unit: 'meter' }
			);

			// Pass each crime entity into sorting functions
			this._mapStatsData(data[i]);
			this._collateType(data[i]);
			this._collateMonthlyFigures(data[i]);
			this._collateStreets(data[i]);
			// this._offenceOutcome(data[i]); <-- may not need to do that as we call
		}

		//hand back to caller on the next cycle as to ensure
		// caller can register for events
		process.nextTick(() => {
			this.emit('managerComplete', {
				allStreetsMonthly: this._monthlyFigures,
				allStreetsType: this._type,
				allStreetsSolved: this._openToClose,
				allStreetsbyFigures: this._streets,
				allStreetsToMap: Object.keys(this._mapsData).map(street => [
					street,
					this._mapsData[street]
				]),
				userStreetCrimes: this.testSelectedStreet,
				unsortedCrimes: data
			});
		});
	}

	//Split crimes into various categories
	_collateType(entity) {
		if (this._type[entity.category]) {
			this._type[entity.category] += 1;
		} else {
			this._type[entity.category] = 1;
		}
	}

	//Return overall figures for crime for each month
	_collateMonthlyFigures(entity) {
		if (this._monthlyFigures[entity.month]) {
			this._monthlyFigures[entity.month] += 1;
		} else {
			this._monthlyFigures[entity.month] = 1;
		}
	}

	//Collate overall yearly crime figures for each street
	_collateStreets(entity) {
		const location = this._getStreet(entity.location.street.name);

		if (location === 'Selah Drive') {
			this._specificStreet(entity);
		}

		if (this._streets[location]) {
			this._streets[location] += 1;
		} else {
			this._streets[location] = 1;
		}
	}

	// <-- Not complete. Collate outcomes to determine
	//percentage of solved/unsolved crimes
	_updateOutcomeStatus(entity, streetName) {
		let outcome;
		try {
			outcome = entity.outcome_status.category || null;
		} catch (e) {
			outcome = null;
		}
		switch (true) {
			case outcomes.failure.includes(outcome):
				this._openToClose.unsuccessful++;
				this._mapsData[streetName].outcome.unsolved++;
				break;
			case outcomes.success.includes(outcome):
				this._openToClose.successfull++;
				this._mapsData[streetName].outcome.solved++;
				break;
			case outcomes.pending.includes(outcome):
				this._openToClose.pending++;
				this._mapsData[streetName].outcome.pending++;
				break;
			default:
				this._mapsData[streetName].outcome.notProvided++;
		}
	}

	/**
	*
	* @NOTE: Map data function and helpers
	*
	*/

	_mapStatsData(entity) {
		const streetName = this._getStreet(entity.location.street.name || null);
		if (this._mapsData[streetName]) {
			this._mapAddCrimeAndOutcome(entity, streetName);
		} else {
			this._mapsData[streetName] = new Street(entity, streetName);
		}
	}

	_mapAddCrimeAndOutcome(entity, streetName) {
		const { category } = entity;
		if (this._mapsData[streetName].crimes[category]) {
			this._updateCrimeTypeCount(category, streetName);
		} else {
			this._addCrimeType(category, streetName);
		}
		this._updateOutcomeStatus(entity, streetName);
	}

	_updateCrimeTypeCount(category, streetName) {
		this._mapsData[streetName].crimes[category]++;
	}

	_addCrimeType(category, streetName) {
		this._mapsData[streetName].crimes[category] = 1;
	}

	/*
	*
	* @NOTE: Various statistic API
	*
	*/

	//Collate all street crime fir exact spot given by user
	_specificStreet(dataObj) {
		this.testSelectedStreet.push(dataObj);
	}

	_getStreet(description) {
		if (description.includes('near')) {
			return description.split('near ')[1];
		}
		return description;
	}
}; // end of class

/**
*
*
* @HELPER FUNCTIONS
*
*/

const mapGetCoords = ({ location: { latitude, longitude } }) => [
	latitude,
	longitude
];

function Street(entity, streetName) {
	return {
		name: streetName,
		coords: mapGetCoords(entity),
		crimes: {
			[entity.category]: 1
		},
		outcome: {
			solved: 0,
			pending: 0,
			unsolved: 0,
			notProvided: 0
		}
	};
}
