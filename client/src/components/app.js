/**
*
* @class: Main application container
*
*
*/
//React modules
import React, { Component } from "react";
import { AppWrapper, HeaderWrapper, AppBody } from "./app.styles";

import TopNavigation from "../containers/Navigation/Header";

//Application modules
import Footer from "./footer";

export default class App extends Component {
	render() {
		return (
			<AppWrapper>
				<TopNavigation />

				<AppBody>{this.props.children}</AppBody>
			</AppWrapper>
		);
	}
}
