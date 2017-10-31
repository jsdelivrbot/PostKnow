import React from 'react';

const Input = ({ onChange, value, labelTitle }) => (
	<div>
		<span>{labelTitle}</span>
		<input onChange={onChange} value={value} />
	</div>
);

export default Input;
