import React from 'react';
import styled from 'styled-components';

// need to fix

const List = styled.ul`
	padding: 2rem;
`;

const Wrapper = styled.div`
	@media (min-width: 700px) {
		display: none;
	}
`;

const Title = styled.p``;

const Description = styled.p``;

const Icon = styled.img`
	width: 100px;
`;

const ListItem = styled.div`
	padding-bottom: 2rem;
`;

const IconWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default ({ data }) => {
	const iconJSX = data.map(ico => (
		<ListItem>
			<IconWrapper>
				<Icon alt="front-icon" src={ico.url} />
				<Title>{ico.title}</Title>
				<Description>{ico.description}</Description>
			</IconWrapper>
		</ListItem>
	));
	return (
		<Wrapper>
			<List>{iconJSX}</List>
		</Wrapper>
	);
};
