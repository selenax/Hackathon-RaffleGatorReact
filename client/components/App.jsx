import React, { Component } from 'react';
import Header from './Header';
import ContestContainer from './ContestContainer';
import ContestListing from './ContestListing';
import readAll from './models/readAll.js';
import addContest from './models/addContest.js';
import SearchBar from './SearchBar';

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
        <Header />
        <SearchBar />
        <ContestContainer />
      </div>
    );
  }
}

export default App;
