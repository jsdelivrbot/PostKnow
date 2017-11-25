import styled from 'styled-components';
import {
	THEME_AQUA,
	THEME_WAVE,
	THEME_SEAFOAM,
	THEME_OCEAN
} from '~/src/consts/colorScheme';

export const PopupContainer = styled.div`
	display: flex;
	flex-direction: column;
	color: ${THEME_SEAFOAM};
`;

export const PopupSection = styled.div``;

export const Title = styled.h2`
	font-size: 1rem;
	color: ${THEME_SEAFOAM};
	border-bottom: 1px solid ${THEME_SEAFOAM};
	padding-bottom: 10px;
`;

export const FlexColumn = styled.div`
	display: flex;
`;

export const Divider = styled.hr``;
