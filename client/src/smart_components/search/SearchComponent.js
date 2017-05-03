/**
*
* @class:  Allow user to input postcode and sanatize text and verify that
*          location exists.
*
*/

import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux';
import { checkPostcode } from '../../actions/actions';
import { inputIsSafe } from '../../libs/sanatize';
import MessageUtil from '../../libs/messageUtil';

class SearchPage extends Component {

  constructor(props){
    super(props);
    this.state = { postcode: '' };
    this._handleSearch = this._sanatizeInput.bind(this);
  }

  //Update postcode in state object
  _setPostState(e){
    this.setState({ postcode: e.target.value });
  }

  //Ensure user has not entered malicious code into the input
  _sanatizeInput(postcode){

		//Pass through input sanatization and either alert
		//user of possible injection or pass to retrieve coords
		if(inputIsSafe(postcode)){
			this._retreiveCoords(postcode);
		}
		else{
			//push error message back to user
		}

    //Call check action <-- Possibly not needed if carried out on client
    //this.props.checkPostcodeAction(postcode)
  }

	// Handle request to server to check user postcode and provide full
	//adrdress back for confirmation
  _retreiveCoords(postcode){
		const params = { params: { postcode } };
		axios.get('/checkPostcode', params)
				 .then((response) => {
					 return response.data.error ? swal('Error', response.data.message) : null
					 const formatted_address = response.data.location.results[0].formatted_address;
					 swal(MessageUtil.confirm(formatted_address), (userConfirm) => {
						 if(userConfirm){
							 //send off action to reducers
							 console.log('simulate accept')
							 return
						 }
						 //Confirmation message of dud address - return to main screen
						 swal('Got it. Please try re-entering location');
					 });
				 })
				 .catch((error) => {
					  console.log('Simulate error ', error)
					 //error message
				 });
  }


  render(){
      return(
        <div className="search_wrapper">

					{/* Icon push and application description */}
          <section className="search_hero">

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
  checkPostcodeAction: (coordinates) => dispatchEvent(checkPostcode(coordinates))
})

export default connect(null, mapDispatchToProps)(SearchPage)
