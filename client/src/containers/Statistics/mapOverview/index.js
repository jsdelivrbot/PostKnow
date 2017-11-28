/**
*
* @class:  Render street map detailing crimes by street
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Map, Marker, Popup, TileLayer, CircleMarker } from 'react-leaflet';
import { MapWrapper, Title } from './map.styles';
import StreetMarker from './components/circlemarker';

class MapOverview extends Component {
	populateStreetMarkers() {
		return this.props.mapData.map(street => {
			const streetData = street[1];
			return (
				<StreetMarker
					streetData={streetData}
					offenceRange={this.props.offenceRange}
					radiusRange={this.props.offenceValues}
				/>
			);
		});
	}

	render() {
		const { coordinates: { lat, lng }, streetAddress } = this.props;
		return (
			<MapWrapper>
				<Title> Map Overview for {streetAddress} </Title>
				<Map center={[lat, lng]} zoom={60}>
					<TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
					<Marker position={[lat, lng]}>
						<Popup>
							<span> Iris Crecent </span>
						</Popup>
					</Marker>
					{this.populateStreetMarkers()}
				</Map>
			</MapWrapper>
		);
	}
}

const mapStateToProps = reduxState => ({
	coordinates: reduxState.coords.coords,
	streetAddress: reduxState.coords.address,
	mapData: reduxState.stats.mapData,
	offenceRange: reduxState.stats.offenceRange,
	offenceValues: reduxState.stats.offenceValues
});

export default connect(mapStateToProps)(MapOverview);
