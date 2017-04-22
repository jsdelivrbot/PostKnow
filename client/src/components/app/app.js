//=======================================
//
// Main application 
//

//React modules
import React, { Component } from 'react';
import styles from './app.scss';

//Application modules
import Footer from '../footer/footer';

export default class App extends Component {

  render() {
    return (
      <div className="app-container">
         
          {/* Application header */}
          <section className={styles.appHeader}>
            <h3 className={styles.header}> Application header </h3>
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
