/**
*
* @summary: Main statistics container connected to redux store enables to
*           returned data to be passed to stateless child components
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

//Child components
/*
const statPath = '../../components/stats/';
import ByCrimeStats from `${statPath}byCrimeStats`;
import BySpatialStats from `${statPath}byCrimeStats`;
import ClosedToOpenStats from `${statPath}byCrimeStats`;
import MonthlyStats from `${statPath}byCrimeStats`;
*/

class StatsContainer extends Component {

	constructor(props){
		super(props);
	}

	render(){
		return(
			<section className="stats-container">
				<h1> Stats container </h1>

				{/* Children to go here and data passed down to them */}
			</section>
		);
	}

}

// <-- Stub a large bulk call in there and break down to different
// components later.
const mapStateToProps = reduxState => {
	return{
		bulkdata: reduxState.stats.data
	}
}

export default connect(mapStateToProps)(StatsContainer)
