import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ContestContainer from './ContestContainer';
import ContestListing from './ContestListing';
import readAll from './models/readAll.js';
import addContest from './models/addContest.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: null
    };
  }

  componentDidMount() {

    readAll().then((results) => {
      this.setState({
        contests: results
      })
    })

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
