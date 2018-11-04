import React, { Component } from 'react';
import Header from './Header';
import ContestContainer from './ContestContainer';
import ContestListing from './ContestListing';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <ContestContainer />
        <ContestListing />
        <Login />
      </div>
    );
  }
}

export default App;
