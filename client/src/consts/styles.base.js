import styled from 'styled-components';
import React from 'react';

// BREAKPOINTS
export const BP = {
	MOBILE: 600,
	TABLET: 769
};

export const Link = ({ children }) => <a>{children}</a>;

export const Anchor = styled.a`
	text-decoration: none;
`;
