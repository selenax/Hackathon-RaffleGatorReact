import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContestContainer from './ContestContainer';
import ContestListing from './ContestListing';

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
      </div>
    );
  }
}

export default App;
