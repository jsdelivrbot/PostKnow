import React, { Component } from 'react';
import { connect } from 'react-redux';

//Child components
import ByCrimeStats from '../components/stats/byCrimeStats';
import ClosedToOpenStats from '../components/stats/closedToOpenStats';
import MonthlyStats from '../components/stats/monthlyStats';

class StatsContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="stats-container">
				<h1> Stats container </h1>
			</section>
		);
	}
}

// <-- Stub a large bulk call in there and break down to different
// components later.
const mapStateToProps = reduxState => ({
	bulkdata: reduxState.stats.data,
	overallMonthlyStats: reduxState.stats.monthlyOverall,
	solvedStats: reduxState.stats.solvedOverall,
	byStreetStats: reduxState.stats.byStreetOverall,
	userStreet: reduxState.stats.userStreetOverall
});

export default connect(mapStateToProps)(StatsContainer);