import styled from 'styled-components';
import { THEME_AQUA } from '../../../consts/colorScheme';
import { Anchor, BP } from '../../../consts/styles.base';

const DEFAULT_HEIGHT = '60px';

export const HeaderWrapper = styled.nav`
	left: 0;
	top: 0;
	height: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
	background: ${THEME_AQUA};
	background: #003b46; /* Old browsers */
	background: -moz-linear-gradient(
		45deg,
		#003b46 18%,
		#07575b 51%,
		#66a5ad 83%,
		#66a5ad 98%,
		#7db9e8 100%
	); /* FF3.6-15 */
	background: -webkit-linear-gradient(
		45deg,
		#003b46 18%,
		#07575b 51%,
		#66a5ad 83%,
		#66a5ad 98%,
		#7db9e8 100%
	); /* Chrome10-25,Safari5.1-6 */
	background: linear-gradient(
		45deg,
		#003b46 18%,
		#07575b 51%,
		#66a5ad 83%,
		#66a5ad 98%,
		#7db9e8 100%
	); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
	filter: progid:DXImageTransform.Microsoft.gradient(
			startColorstr="#003b46",
			endColorstr="#7db9e8",
			GradientType=1
		);
	padding: 20px;
	@media (min-width: 800px) {
	}
`;

export const HeaderInnerBlock = styled.div`
	padding: 0 15px;
	@media (min-width: 796px) {
		display: flex;
		justify-content: flex-end;
		margin: 0 auto;
		height: 100%;
		max-width: 1000px;
	}
`;

export const AppLogo = styled.h1`
	cursor: pointer;
	float: left;
	margin: 0;
	height: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
	@media (min-width: 796px) {
		flex: 1;
		align-self: flex-start;
		float: none;
		height: 100%;
	}
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
	z-index: 100;
	left: 0;
	top: ${props => (props.height ? props.height : `${DEFAULT_HEIGHT}`)};
	background: ${THEME_AQUA};
	width: 100%;
	height: ${props => (props.isChangingState ? '100vh' : 0)};
	padding: 3rem 0 0 0;
	margin: 20px 0 0 0;
	list-style: none;
	opacity: ${props => (props.isChangingState ? 1 : 0)};
	overflow: hidden;
	transition: ${props =>
		props.isChangingState
			? 'opacity 300ms ease-out'
			: 'opacity 300ms ease-out, height 0ms linear 300ms'};
	@media (min-width: 796px) {
		display: flex;
		position: static;
		width: auto;
		height: auto;
		background-color: transparent;
		opacity: 1;
		padding-top: 0;
	}
`;

export const Li = styled.li`
	@media (min-width: 769px) {
		display: flex;
		align-items: center;
		height: $nav-height;
		&:hover {
			background: #ffa50042;
		}
	}
`; //

export const AppLink = Anchor.extend`
	cursor: pointer;
	display: block;
	padding: 15px 0;
	color: ${props => (props.color ? 'black' : 'white')};
	text-align: center;
	text-decoration: none;
	letter-spacing: 1px;
	background: #00ffd408;
	width: 40%;
	margin: 10px auto;
	font-size: 2rem;
	font-family: "Raleway", arial;
	transition: opacity 0.2s ease-in;
	&:hover {
		opacity: 0.6;
	}
	@media (min-width: 796px) {
		padding: 0 30px;
		transition: color 150ms ease-out;
		font-size: 1rem;
		background: none;
	}
`;

export const BurgerMenu = Anchor.extend`
	cursor: pointer;
	float: right;
	position: relative;
	width: 60px;
	height: 60px;
	right: 20px;
	background: ${props => (props.isChangingState ? '#00ffd408' : 'inherit')};
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
	&:before {
		transform: ${props =>
			props.isChangingState ? 'translate3d(0,6px,0) rotate(-45deg)' : ''};
	}
	&:after {
		transform: ${props =>
			props.isChangingState ? 'translate3d(0,-6px,0) rotate(45deg)' : ''};
	}
	@media (min-width: 796px) {
		display: none;
	}
`;
