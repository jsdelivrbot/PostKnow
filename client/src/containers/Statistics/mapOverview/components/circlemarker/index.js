import React from 'react';
import { Popup, CircleMarker } from 'react-leaflet';
import {
	PopupContainer,
	PopupSection,
	Title,
	FlexColumn
} from './circle.style';

export default props => {
	const { coords, outcome, name, crimes } = props.streetData;
	return (
		<CircleMarker center={coords} color={'red'} radius={10}>
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
