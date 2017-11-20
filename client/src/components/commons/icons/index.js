import React from 'react';
import styled from 'styled-components';
import { THEME_AQUA } from '../../../consts/colorScheme';

// need to fix

const List = styled.ul``;

const Wrapper = styled.div`
	position: relative;
	background: ${THEME_AQUA};
	@media (min-width: 700px) {
		display: none;
	}
`;

const Title = styled.p`
	font-size: 1.9rem;
	padding: 0.5rem 2.5rem;
	color: #73aeb5;
	border-bottom: 1px solid;
	margin: 1.5rem;
`;

const Description = styled.p`
	color: ${({ color }) => color || '#05434e'};
`;

const Icon = styled.img`
	width: 100px;
`;

const ListItem = styled.div`
	padding: 2rem;
	background: ${({ bgColor }) => bgColor || 'inherit'};
	transform: ${({ skew }) => `skew(${skew})`};
`;

const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	transform: ${({ skew }) => `skew(${skew})`};
	padding: 2rem;
`;

export default ({ data }) => {
	const iconJSX = data.map(ico => (
		<ListItem bgColor={ico.bgColor} skew={ico.skew.outer}>
			<IconWrapper skew={ico.skew.inner}>
				<Icon alt="front-icon" src={ico.url} />
				<Title>{ico.title}</Title>
				<Description color={ico.textColor}>{ico.description}</Description>
			</IconWrapper>
		</ListItem>
	));
	return (
		<Wrapper>
			<List>{iconJSX}</List>
		</Wrapper>
	);
};
