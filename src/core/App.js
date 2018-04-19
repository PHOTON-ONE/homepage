import React, { Component } from 'react';
import '../styles/styles.css';

import { Header, Content } from '../components/index.js';

import logo from '../images/logo.png';

class App extends Component {
  render() {
    return (
      <div className="body">
      	<Header logo={logo} />
      	<Content>
      	Test<br/>
      	</Content>
      </div>
    );
  }
}

export default App;
