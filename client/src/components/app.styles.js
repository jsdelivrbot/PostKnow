import styled from 'styled-components';

export const AppWrapper = styled.div`
	color: white;
	display: flex;
	flex-direction: column;
	margin: 0;
	height: 100vh;
`;

export const MobileLayoutSwitchContainer = styled.div`
	color: black;
	display: flex;
	flex: 1;
	flex-direction: ${({ mobileLayout }) => (mobileLayout ? 'row' : 'column')};
`;

export const HeaderWrapper = styled.div`
	color: yellow;
`;

export const AppBody = styled.div`
	color: green;
`;
