import styled from 'styled-components';
import {
	THEME_AQUA,
	THEME_OCEAN,
	THEME_WAVE,
	THEME_SEAFOAM
} from '../../consts/colorScheme';

export const Wrapper = styled.div`
	padding: 1.5rem;
	background: #00000014;
	color: ${THEME_OCEAN};
	position: relative;
	z-index: 30;
`;

export const IconContainer = styled.div`
	display: flex;
`;
