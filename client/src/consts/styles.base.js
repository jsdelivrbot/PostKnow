import styled from 'styled-components';
import React from 'react';

export const Link = ({ children }) => <a>{children}</a>;

export const Anchor = styled.a`
	text-decoration: none;
`;
