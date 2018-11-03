import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <input type="text" />
        <select>
          <option value="prizes">Prize</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
        </select>
        <button type="button">Submit</button>
      </div>
    );
  }
}

export default App;
