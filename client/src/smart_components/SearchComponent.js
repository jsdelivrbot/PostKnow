/**
*
* @class:  Allow user to input postcode and sanatize text and verify that
*          location exists.
*
*/

import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { checkPostcode, queryAPI, clearDialog } from '../actions/actions';
import { inputIsSafe } from '../libs/sanatize';
import MessageUtil from '../libs/messageUtil';

class SearchPage extends Component {

  constructor(props){
    super(props);
    this.state = {
			postcode: ''
		};
    this._sanatizeInput = this._sanatizeInput.bind(this);
  }

	//Render confirm of failure message based on server response
	componentDidUpdate(){
		if(this.props.displayDialog && this.props.isNotAFail){
			swal(MessageUtil.confirm(this.props.address), (userConfirm) => {
				if(userConfirm){
					return console.log('ready to send off to the api')
				}
				this._handleUserError('Got it.', 'Please re-enter location');
			});
		}else if(this.props.displayDialog && !this.props.isNotAFail){
			this._handleUserError('Error', 'Cannot find location from input');
		}
	}

	//Clear dialog state and return to error message to user
	_handleUserError(errorTitle, errorMessage){
		swal(errorTitle, errorMessage);
		this.props.clearDialog();
		this.setState({ postcode: '' });
	}

  //Update postcode in state object
  _setPostState(e){
    this.setState({ postcode: e.target.value });
  }

  //Ensure user has not entered malicious code into the input
  _sanatizeInput(postcode){

		if(inputIsSafe(postcode)){
			this._retreiveCoords(postcode);
		}
		else{
			swal('Malicious code detected', 'you no good dirty b@#@#@^&');
		}
  }


	// Handle request to server to check user postcode and provide full
	//adrdress back for confirmation
  _retreiveCoords(postcode){
		console.log(postcode);
		this.props.queryPostcode(postcode);
  }


  render(){
      return(
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

                <button className="button"
                  onClick={ () => this._sanatizeInput(this.state.postcode)}>
                  Check area </button>

              </div>
          </section>


        </div> )
  }

}

// Map query dispatch to component props
const mapDispatchToProps = (dispatchEvent) => ({
  queryAPI: (coordinates) => dispatchEvent(queryAPI(coordinates)),
	queryPostcode: (postcode) => dispatchEvent(checkPostcode(postcode)),
	clearDialog: () => dispatchEvent(clearDialog())
})

//Map user coordinate state to props
const mapStateToProps = reduxState => {
	return {
		coords: reduxState.coords.coords,
		address: reduxState.coords.address,
		displayDialog: reduxState.dialog.showMessage,
		isNotAFail: reduxState.coords.isNotAFail
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
