import React, { Component } from 'react';
import { ICONS } from '../../../consts/AppElements';
import { Wrapper, Icon, IconSVG } from './sidebar.styles';

type Props = {
	shouldShow: boolean,
	mobileLayout: boolean
};

export default class Sidebar extends Component<Props> {
	constructor() {
		super();
		this.state = {
			selected: null,
			icons: []
		};
	}

	handleIconClick(ico: string): void {
		this.setState({ selected: ico });
	}

	renderIcons(isMobile) {
		console.log('is Mobile === ', isMobile);
		return this.props.icons.map(ico => {
			const selected = ico === this.state.selected;
			return (
				<Icon selected={selected} onClick={() => this.handleIconClick(ico)}>
					<IconSVG
						selected={selected}
						isMobile={isMobile}
						src={`img/icon_side/${ico}.svg`}
						alt={`${ico}`}
					/>
				</Icon>
			);
		});
	}
	render() {
		const { props } = this;
		return (
			<Wrapper shouldShow={props.shouldShow} isMobile={props.mobileLayout}>
				{this.renderIcons(!props.mobileLayout)}
			</Wrapper>
		);
	}
}
