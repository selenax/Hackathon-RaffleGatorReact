import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <input style={{ padding: '7px', width: '200px' }} type="text" />
        <select>
          <option value="prizes">Prize</option>
          <option value="twitter">Twitter</option>
          <option value="instagram">Instagram</option>
        </select>
        <Button style={{ background: 'lightgreen' }}>Submit</Button>
      </div>
    );
  }
}

export default SearchBar;
