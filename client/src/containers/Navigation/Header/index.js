import React, { Component } from 'react';
import {
	HeaderWrapper,
	HeaderInnerBlock,
	AppLogo,
	Logo,
	AppMenu,
	AppLink,
	BurgerMenu
} from './styles';

// @TODO
// state to show not logged in
// state to show logged in
// date state

export default class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isMobile: false,
			isLoggedIn: false,
			date: null
		};
	}

	componentDidMount() {
		this.setupComponent();
	}

	setupComponent() {
		//handle selector
		//attach breakpoints
		//
	}

	setupComponent() {}

	render() {
		return (
			<HeaderWrapper id="nav">
				<HeaderInnerBlock>
					<AppLogo>
						<Logo> PostKnow </Logo>
					</AppLogo>
					<AppMenu>
						<AppLink>Login</AppLink>
						<AppLink>Signup</AppLink>
						<AppLink>About</AppLink>
					</AppMenu>
					<BurgerMenu />
				</HeaderInnerBlock>
			</HeaderWrapper>
		);
	}
}
