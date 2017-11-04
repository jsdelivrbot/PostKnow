import React, { Component } from 'react';
import { NAVIGATION_ID, BURGER_MENU } from '../../../consts/AppElements';
import {
	HeaderWrapper,
	HeaderInnerBlock,
	AppLogo,
	Logo,
	AppMenu,
	AppLink,
	Li,
	BurgerMenu
} from './styles';

export default class Wrapper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isMobile: false,
			isLoggedIn: false,
			date: null
		};
	}

	componentDidMount() {
		this.burgerMenu = document.getElementById(BURGER_MENU);
		this.burgerMenu.addEventListener(
			'touchend',
			this.handleOpenMobileMenu.bind(this)
		);
	}

	componentWillUnmount() {
		this.burgerMenu.removeEventListener(
			'touchend',
			this.handleOpenMobileMenu.bind(this)
		);
	}

	handleOpenMobileMenu(e) {
		e.preventDefault();
		this.setState({ isOpen: !this.state.isOpen });
	}

	renderAppStateLinks() {
		// based on whether logged in render correct links
	}

	render() {
		return (
			<HeaderWrapper id={NAVIGATION_ID}>
				<HeaderInnerBlock>
					<AppLogo>
						<Logo> PostKnow </Logo>
					</AppLogo>
					<AppMenu isChangingState={this.state.isOpen}>
						<Li>
							<AppLink>Login</AppLink>
						</Li>
						<Li>
							<AppLink>Signup</AppLink>
						</Li>
						<Li>
							<AppLink>About</AppLink>
						</Li>
					</AppMenu>
					<BurgerMenu
						id={BURGER_MENU}
						isChangingState={this.state.isOpen}
						onClick={this.handleOpenMobileMenu.bind(this)}
					/>
				</HeaderInnerBlock>
			</HeaderWrapper>
		);
	}
}
