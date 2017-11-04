import styled from 'styled-components';
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
		case !hasSearched && currentWindowWidth() > BP.MOBILE:
			return 'translate(-200px)';
		default:
			return 'translate(0)';
	}
};
export const Wrapper = styled.footer`
	padding: 1.5rem;
	background: ${THEME_SEAFOAM};
	transition: all 300ms ease-in;
	transform: ${({ shouldShow, mobileLayout }) =>
		determineSidebarLocation(shouldShow)};
	width: ${({ mobileLayout }) => (mobileLayout ? '100%' : '')};
`;
