// @flow

import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import { OFF_COLOR } from '~/src/consts/colorScheme';
import {
	PopupContainer,
	PopupSection,
	Title,
	FlexColumn
} from './circle.style';

type offenceRangeObject = {
	low: Array<number>,
	med: Array<number>,
	high: Array<number>
};

const markerColor = (
	offenceRange: offenceRangeObject,
	noOfOffences: number
): string => {
	switch (true) {
		case offenceRange.low.includes(noOfOffences):
			return OFF_COLOR.GREEN;
		case offenceRange.med.includes(noOfOffences):
			return OFF_COLOR.AMBER;
		case offenceRange.high.includes(noOfOffences):
			return OFF_COLOR.RED;
		default:
			return OFF_COLOR.ODD;
	}
};

export default props => {
	const { coords, outcome, name, crimes, crimeSum } = props.streetData;
	console.log(props);
	return (
		<CircleMarker
			center={coords}
			color={markerColor(props.offenceRange, crimeSum)}
			radius={30}
		>
			<Popup>
				<PopupContainer>
					<PopupSection>
						<Title>{name}</Title>
					</PopupSection>
					<PopupSection>
						<Title>Crimes</Title>
					</PopupSection>
					<PopupSection>
						<Title> Outcomes </Title>
						<FlexColumn>
							<p>Solved: {outcome.solved} </p>
							<p>Unsolved: {outcome.unsolved} </p>
							<p>Pending: {outcome.pending} </p>
							<p>No details: {outcome.notProvided} </p>
						</FlexColumn>
					</PopupSection>
				</PopupContainer>
			</Popup>
		</CircleMarker>
	);
};
