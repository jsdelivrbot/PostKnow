import React, { Component } from 'react';

export default class Sidebar extends Component {
	constructor(props) {
		super();
		this.state = {
			selected: null,
			icons: []
		};
	}
	render() {
		const { isOpen } = this.props;
		const sidebarClass = isOpen ? 'sidebar-open' : 'sidebar-closed';
		return (
			<div>
				<h2> Sidebar </h2>
			</div>
		);
	}
}
