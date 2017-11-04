/**
*
* @class: Main application container
*
*
*/

//React modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentWindowWidth } from '../libs/domUtils';
import { AppWrapper, AppBody, MobileLayoutSwitchContainer } from './app.styles';

// Application modules
import TopNavigation from '../containers/Navigation/Header';
import SideNavigation from '../containers/Navigation/Sidebar';
import AppFooter from './footer/';

// Component consts
import { NAVIGATION_ID } from '../consts/AppElements';
import { BP } from '../consts/styles.base';

// redux
import { handleWindowResize } from '../actions/actions';

const mapStateToProps = state => ({
	isMobileView: state.ui.mobileLayout,
	shouldShowSidebar: state.ui.sidebar
});

const mapDispatchToProps = dispatch => ({
	windowResize: size => dispatch(handleWindowResize(size))
});

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigationOpen: true,
			mobileLayout: this.props.isMobileView,
			shouldShowSideMenu: this.props.shouldShowSidebar
		};
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleViewportResize.bind(this));
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.isMobileView !== this.state.isMobileView) {
			this.setState({
				mobileLayout: nextProps.isMobileView
			});
		}
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleViewportResize.bind(this));
	}

	handleViewportResize() {
		this.props.windowResize(currentWindowWidth());
	}

	handleStatSelect(stat) {
		// could dispatch this as an action
	}

	render() {
		const { props, state } = this;
		return (
			<AppWrapper>
				<TopNavigation selector={NAVIGATION_ID} />
				<MobileLayoutSwitchContainer mobileLayout={state.mobileLayout}>
					<SideNavigation
						mobileLayout={state.mobileLayout}
						shouldShow={props.shouldShowSidebar}
						isOpen={state.navigationOpen}
						selectedState={this.handleStatSelect}
					/>
					<AppBody>{props.children}</AppBody>
				</MobileLayoutSwitchContainer>
				<AppFooter />
			</AppWrapper>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
