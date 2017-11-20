import styled from 'styled-components';

export const SearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const ImageBackground = styled.div`
	background: url(/img/splash/london.svg);
	background-size: cover;
	height: 600px;
	display: flex;
	justify-content: center;
	width: 100vw;
`;

export const SearchWrapperInnner = styled.div`
	display: ${({ isLoading }) => (isLoading ? 'none' : 'flex')};
	flex: 1;
	align-self: center;
	flex-direction: column;
`;

export const InputHero = styled.div`
	/*position: absolute;*/
`;

export const Button = styled.div`
	padding: 6px;
	background: blue;
	color: white;
`;

export const AbsTextContainer = styled.div`
	position: absolute;
	left: 0;
`;

export const AbsText = styled.div`
	margin-top: ${({ top }) => (top ? `${top}px` : '10px')};
	font-size: 3rem;
	background: #02404969;
	padding: 1rem;
	color: white;
	position: relative;
`;
