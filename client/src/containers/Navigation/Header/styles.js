import styled from 'styled-components';
import { THEME_AQUA } from '../../../consts/colorScheme';
import { Anchor } from '../../../consts/styles.base';

const DEFAULT_HEIGHT = '60px';

export const HeaderWrapper = styled.nav`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
	background: ${THEME_AQUA};
	padding: 20px;
	@media (min-width: 800px) {
		background: ${THEME_AQUA};
	}
`;

export const HeaderInnerBlock = styled.div`
	padding: 0 15px;
`;

export const AppLogo = styled.h1`
	float: left;
	margin: 0;
	height: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
`;

export const Logo = Anchor.extend`
	display: flex;
	align-items: center;
	padding-left: 0;
	height: 100%;
	color: white;
	font-size: 22px;
	font-weight: 700;
	text-align: left;
	letter-spacing: 2px;
	&:hover {
		opacity: 0.5;
	}
`;

export const AppMenu = styled.ul`
	position: absolute;
	left: 0;
	top: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
	width: 100%;
	height: 0;
	padding: 0;
	margin: 0;
	list-style: none;
	opacity: 0;
	overflow: hidden;
	transition: opacity 300ms ease-out, height 0ms linear 300ms;
`;

export const AppLink = Anchor.extend`
	display: block;
	padding: 15px 0;
	color: ${props => (props.color ? props.color : 'black')}
	text-align: center;
	text-decoration: none;
	letter-spacing: 1px;
`;

export const BurgerMenu = Anchor.extend`
	float: right;
	position: relative;
	width: 60px;
	height: 60px;
	right: 20px;
	&:before,
	&:after {
		content: "";
		position: absolute;
		left: 10px;
		width: 40px;
		height: 4px;
		background-color: white;
		transform-origin: 50% 50%;
		transition: transform 275ms ease;
	}
	&:before {
		top: 22px;
	}
	&:after {
		top: 34px;
	}
`;
