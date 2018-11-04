import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link, Redirect } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Login from './Login';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: '', // To be use for onClick button functions
    };
  }

  render() {
    return (
      <div id="header-container">
        <AppBar
          position="static"
          style={{ background: 'lightblue' }}
        >
          <Toolbar color="secondary" style={{ marginLeft: 'auto' }}>
            <Login />
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
            >
              <Link to="/about">About</Link>
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
            >
              <Link to="/form">Form</Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    display: 'flex',
  },
};

export default withStyles(styles)(Header);
