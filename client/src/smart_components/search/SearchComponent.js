import React, { Component } from 'react';

import { connect } from 'react-redux';
import { queryAPI } from '../../actions/actions';

class SearchPage extends Component {

  constructor(props){
    super(props);
    this.state = { postcode: '' };
    this._handleSearch = this._handleSearch.bind(this);
  }

  //Update post 
  _setPostState(e){
    this.setState({ postcode: e.target.value });
  }

  //Confirm valid postcode 
  _handleSearch(postcode){

    //sanatize text 
    //check correct format 
    //retrieve coords
    //call dispatcher

    //stub test
    this.props.fetchStatsAction(postcode)
  }

  _retreiveCoords(postcode){
    //reverse geocode
    //push check message to user
    //return bool
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
                  onClick={ () => this._handleSearch(this.state.postcode)}> 
                  Check area </button>
              
              </div>
          </section>
        </div> )
  }

}

// Map query dispatch to component props
const mapDispatchToProps = (dispatchEvent) => ({
  fetchStatsAction: (coordinates) => dispatchEvent(queryAPI(coordinates))
})

export default connect(null, mapDispatchToProps)(SearchPage)


