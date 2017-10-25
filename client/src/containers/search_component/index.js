// @flow

/**
*
* @class:  Allow user to input postcode and sanatize text and verify that
*          location exists.
*
*/

import React, { Component } from "react";
import axios from "axios";

import { connect } from "react-redux";
import { checkPostcode, queryAPI, clearDialog } from "../../actions/actions";
import MessageUtil from "../../libs/messageUtil";

import { SearchWrapper } from "./searchComponent.styles";

class SearchPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			postcode: "da75qd"
		};
		this._retreiveCoords = this._retreiveCoords.bind(this);
	}

	//Render confirm of failure message based on server response
	componentDidUpdate() {
		if (this.props.displayDialog && this.props.isNotAFail) {
			swal(MessageUtil.confirm(this.props.address), userConfirm => {
				if (userConfirm) {
					this.props.queryAPI(this.props.coords);
				}
				this._handleUserError("Got it.", "Please re-enter location");
			});
		} else if (this.props.displayDialog && !this.props.isNotAFail) {
			this._handleUserError("Error", "Cannot find location from input");
		}
	}

	//Clear dialog state and return to error message to user
	_handleUserError(errorTitle, errorMessage) {
		swal(errorTitle, errorMessage);
		this.props.clearDialog();
		this.setState({ postcode: "" });
	}

	//Update postcode in state object
	_setPostState(e) {
		this.setState({ postcode: e.target.value });
	}

	// Handle request to server to check user postcode and provide full
	//adrdress back for confirmation
	_retreiveCoords() {
		if (this.state.postcode) {
			return this.props.queryPostcode(this.state.postcode);
		}
		swal("Nothing entered", "Please enter a location");
	}

	render() {
		return (
			<div className="search_wrapper">
				{/* Icon push and application description */}
				<section className="search_hero">
					<h3>remo</h3>
				</section>

				{/* Postcode input */}
				<section className="search_search">
					<div className="search_input">
						<input
							value={this.state.postcode}
							onChange={this._setPostState.bind(this)}
						/>

						<button
							className="button"
							onClick={() => this._retreiveCoords(this.state.postcode)}
						>
							Check area{" "}
						</button>
					</div>
				</section>
			</div>
		);
	}
}

// Map query dispatch to component props
const mapDispatchToProps = dispatchEvent => ({
	queryAPI: coordinates => dispatchEvent(queryAPI(coordinates)),
	queryPostcode: postcode => dispatchEvent(checkPostcode(postcode)),
	clearDialog: () => dispatchEvent(clearDialog())
});

//Map user coordinate state to props
const mapStateToProps = reduxState => {
	return {
		coords: reduxState.coords.coords,
		address: reduxState.coords.address,
		displayDialog: reduxState.dialog.showMessage,
		isNotAFail: reduxState.coords.isNotAFail
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
