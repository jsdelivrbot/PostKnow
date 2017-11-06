import styled from 'styled-components';
import { curry } from 'lodash';
import {
	THEME_AQUA,
	THEME_OCEAN,
	THEME_WAVE,
	THEME_SEAFOAM
} from '../../../consts/colorScheme';
import { currentWindowWidth } from '../../../libs/domUtils';
import { BP } from '../../../consts/styles.base';

// handle positining and layout of sidebar on initial load
// and after search
const determineSidebarLocation = hasSearched => {
	switch (true) {
		case !hasSearched && currentWindowWidth() < BP.MOBILE:
			return 'translate(0,-200px)';
		case !hasSearched && currentWindowWidth() > BP.MOBILE: //hasSearched
			return 'translate(-200px)';
		default:
			return 'translate(0)';
	}
};

const view = () => ({
	isMobile: currentWindowWidth() < BP.MOBILE,
	isDesktop: currentWindowWidth() > BP.MOBILE
});

const sideBarCurry = (sidebarShow, cssDefault) => (cssMobile, cssDesktop) => {
	console.log(sidebarShow, cssDefault, cssMobile, cssDesktop);
	let x;
	if (sidebarShow && view().isMobile) {
		x = cssMobile;
	} else if (sidebarShow && view().isDesktop) {
		x = cssDesktop;
	}
	x = cssDefault;
	console.log('x is ', x);
	return x;
};

/*
transform: ${({ shouldShow, mobileLayout }) =>
	determineSidebarLocation(shouldShow)};
	*/

const curryCSS = _.curry(sideBarCurry);

export const Wrapper = styled.div`
	position: relative;
	z-index: 10;
	padding: 1.5rem;
	background: ${THEME_SEAFOAM};
	transition: all 300ms ease-in;
	opacity: ${({ shouldShow }) => (shouldShow ? '1' : '0')};
	transform: ${({ shouldShow }) =>
		curryCSS(shouldShow, 'translate(0)')(
			'translate(0,-200px',
			'translate(-200px)'
		)}
	width: ${({ shouldShow }) =>
		curryCSS(shouldShow, 'inherit')('inherit', '120px')};
`;
