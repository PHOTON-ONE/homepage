import React, { Component } from 'react';
import '../styles/styles.css';

import { Header, Content, Contact, Slideshow } from '../components/index.js';

import logo from '../images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="body">
      	<Header logo={logo} />
        <div className="container">
          <Content />
          <Slideshow />
          <Contact />
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}

export default App;
