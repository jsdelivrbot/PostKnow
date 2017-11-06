import styled from 'styled-components';

export const SearchWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const Hero = styled.div`
	display: flex;
	@media (min-width: 800px) {
		display: none;
	}
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
