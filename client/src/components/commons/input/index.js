import React from 'react';
import { Wrapper, Label, InputBox, SearchButton } from './input.style';

const Input = ({ onChange, value, labelTitle, handleSearchClick }) => (
	<Wrapper>
		<Label>{labelTitle}</Label>
		<InputBox onChange={onChange} value={value} />
		<SearchButton onClick={handleSearchClick}>Search</SearchButton>
	</Wrapper>
);

export default Input;
