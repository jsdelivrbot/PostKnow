/**
*
* @class: Main application container
*
*
*/
//React modules
import React, { Component } from 'react';

//Application modules
import Footer from './footer';

export default class App extends Component {

  render() {
    return (
      <div className="app-container">

          {/* Application header */}
          <section className="header-wrapper">
            <h3 className="header-title"> Application header </h3>
          </section>

          {/* Application content */}
          <section className="app-body">
            {this.props.children}
          </section>

          <Footer/>

      </div>
    );
  }

}
