//React modules
import React from "react";
import { Route, IndexRoute } from "react-router";

// Route modules
import App from "./src/components/app";
import Search from "./src/smart_components/Search_component/";
import StatsContainer from "./src/smart_components/StatsContainer";

//Route paths
export default (
	<Route path={"/"} component={App}>
		<IndexRoute component={Search} />
		<Route path={"/stats"} component={StatsContainer} />
	</Route>
);
