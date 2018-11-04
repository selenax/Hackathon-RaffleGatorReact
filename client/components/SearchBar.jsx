import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      select: null,
    };
  }

  handleChange(e) {
    const sel = e.target.value;
    this.setState({
      select: sel,
    });
  }

  render() {
    return (
      <div style={{ display: 'flex', marginTop: '17px', justifyContent: 'center', textAlign: 'center', height: '40px' }}>
        <div style={{ paddingTop: '7px', textAlign: 'center', marginLeft: '5px', fontSize: '19px', marginRight: '4px' }}>Search by keyword</div>
        <div style={{ display: 'flex', alignContent: 'row' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SearchIcon />
          </div>
          <InputBase
            style={{ border: '1px solid grey', borderRadius: '3px', marginLeft: '4px' }}
            placeholder="    Search…"
          />
        </div>
        <FormControl variant="outlined" style={{ width: '130px', marginLeft: '5px' }}>
          <InputLabel
            htmlFor="select"
            style={{ marginTop: '-8px' }}
          >
            Keyword
          </InputLabel>
          <Select
            value={this.state.select}
            onChange={this.handleChange}
            input={
              (<OutlinedInput
                labelWidth={this.state.labelWidth}
                name="keyword"
                id="select"
              />
              )
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="prizes">Prize</MenuItem>
            <MenuItem value="twitter">Twitter</MenuItem>
            <MenuItem value="instagram">Instagram</MenuItem>
          </Select>
        </FormControl>
        <Button style={{ background: 'lightgreen', marginLeft: '5px' }}>Submit</Button>
      </div>
    );
  }
}

export default SearchBar;
