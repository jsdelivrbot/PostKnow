import styled from 'styled-components';
import { THEME_AQUA, THEME_OCEAN } from '../../../consts/colorScheme';
import { BP } from '../../../consts/styles.base';

export const Wrapper = styled.div`
	display: flex;
	align-self: center;
`;

export const Label = styled.span`
	display: none;
	@media (min-width: ${BP.MOBILE}) {
		display: block;
	}
`;

export const InputBox = styled.input`
	padding: 0.4rem;
	font-size: 1.3rem;
`;

export const SearchButton = styled.a`
	padding: 0.4rem;
	font-size: 1.3rem;
	transition: all 0.3s ease-out;
	color: white;
	background: ${THEME_AQUA};
	&:hover {
		cursor: pointer;
		color: ${THEME_AQUA};
		background: ${THEME_OCEAN};
	}
`;
