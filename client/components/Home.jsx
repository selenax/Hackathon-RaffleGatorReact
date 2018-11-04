import React, { Component } from 'react';
import Header from './Header';
import ContestContainer from './ContestContainer';
import ContestListing from './ContestListing';
import SearchBar from './SearchBar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ContestContainer />
      </div>
    );
  }
}

export default Home;
