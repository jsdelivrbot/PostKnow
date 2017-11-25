import styled from 'styled-components';
import { currentWindowWidth } from '../libs/domUtils';
import { BP } from '../consts/styles.base';

// handle positining and layout of sidebar on initial load
// and after search
const determinePaddingLocation = sidebarShowing => {
	switch (true) {
		case !sidebarShowing && currentWindowWidth() < BP.MOBILE:
			return '-80px 0 0 0';
		case !sidebarShowing && currentWindowWidth() > BP.MOBILE:
			return '0 0 0 -200px';
		default:
			return '0';
	}
};

export const AppWrapper = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	margin: 0;
	min-height: 100vh;
`;

export const MobileLayoutSwitchContainer = styled.div`
	color: black;
	display: flex;
	flex: 1;
	flex-direction: ${({ mobileLayout }) => (mobileLayout ? 'row' : 'column')};
	justify-content: center;
`;

export const HeaderWrapper = styled.div`
	color: yellow;
`;

export const AppBody = styled.div`
	z-index: 40;
	flex: 1;
	justify-content: center;
	align-items: center;
	margin: ${({ shouldHavePadding }) =>
		determinePaddingLocation(shouldHavePadding)};
`;
