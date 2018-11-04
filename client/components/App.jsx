import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ContestContainer from './ContestContainer';

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
        <SearchBar />
        <ContestContainer />
      </div>
    );
  }
}

export default App;
