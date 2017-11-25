//React modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route modules
import App from './src/components/app';
import Search from './src/containers/Search/';
import StatsMapOverview from './src/containers/Statistics/mapOverview';

//Route paths
export default (
	<Route path={'/'} component={App}>
		<IndexRoute component={Search} />
		<Route path={'/overview'} component={StatsMapOverview} />
	</Route>
);
