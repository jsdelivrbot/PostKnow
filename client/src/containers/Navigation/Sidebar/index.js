import React, { Component } from 'react';
import { Wrapper } from './sidebar.styles';

export default class Sidebar extends Component {
	constructor(props) {
		super();
		this.state = {
			selected: null,
			icons: []
		};
	}
	render() {
		const { props } = this;
		console.log(props.shouldShow);
		return (
			<Wrapper shouldShow={props.shouldShow}>
				<h2> Sidebar </h2>
				<h3> Hey there </h3>
				<h1> Do not forget me </h1>
			</Wrapper>
		);
	}
}
