import React, { Component } from 'react';
import SearchBar from './SearchBar';
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
        <SearchBar />
        <ContestContainer />
        <ContestListing />
        <Login />
      </div>
    );
  }
}

export default App;
