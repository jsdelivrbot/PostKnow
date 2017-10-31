/**
*
* @class: Main application container
*
*
*/

//React modules
import React, { Component } from 'react';
import { AppWrapper, HeaderWrapper, AppBody } from './app.styles';

// Application modules
import TopNavigation from '../containers/Navigation/Header';
import SideNavigation from '../containers/Navigation/Sidebar';
import AppFooter from './footer/';

// Component consts
import { NAVIGATION_ID } from '../consts/AppElements';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigationOpen: false
		};
	}
	handleStatSelect(stat) {
		// could dispatch this as an action
	}

	render() {
		return (
			<AppWrapper>
				<TopNavigation selector={NAVIGATION_ID} />
				<SideNavigation
					isOpen={this.state.navigationOpen}
					selectedState={this.handleStatSelect}
				/>
				<AppBody>{this.props.children}</AppBody>
				<AppFooter />
			</AppWrapper>
		);
	}
}
