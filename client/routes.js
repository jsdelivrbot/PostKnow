//React modules
import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Route modules
import App from './src/components/app';
import Search from './src/containers/Search/';
import StatsContainer from './src/containers/StatsContainer';

//Route paths
export default (
	<Route path={'/'} component={App}>
		<IndexRoute component={Search} />
		<Route path={'/stats'} component={StatsContainer} />
	</Route>
);
