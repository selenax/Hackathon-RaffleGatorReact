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
    this.click = this.click.bind(this);
  }

  click(e) {
    let clicked = e.target.value;
    const link = document.getElementById(clicked);
    const evt = document.createEvent('MouseEvents'); 
    evt.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    const allowDefault = link.dispatchEvent(evt);
  }

  render() {
    return (
      <div id="header-container">
        <AppBar
          position="static"
          style={{ background: '#EEF5DB' }}
        >
          <div style={{ fontFamily: 'Righteous, cursive', marginTop: '3px', marginLeft: '6px', position: 'absolute', fontSize: '48px', color: '#50d86c', textShadow: '2px 2px 8px #6b6b6b' }}>RaffleGator</div>
          <Toolbar color="secondary" style={{ marginLeft: 'auto' }}>
            <Login />
            <Button
              onClick={this.click}
              value="home"
              variant="contained"
              color="secondary"
              style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', position: 'relative', overflow: 'hidden' }}
            >
              <div className="top left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', left: '-10px' }}></div>
              <div className="top right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', right: '-10px' }}></div>
              <div className="bottom left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', left: '-10px' }}></div>
              <div className="bottom right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', right: '-10px' }}></div>
              <Link id="home" to="/" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Home</Link>
            </Button>
            <Button
              onClick={this.click}
              value="about"
              variant="contained"
              color="secondary"
              style={{ color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',  position: 'relative', overflow: 'hidden' }}
            >
              <div className="top left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', left: '-10px' }}></div>
              <div className="top right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', right: '-10px' }}></div>
              <div className="bottom left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', left: '-10px' }}></div>
              <div className="bottom right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', right: '-10px' }}></div>
              <Link id="about" to="/about" style={{ color: '#FFFFFF', textDecoration: 'none' }}>About</Link>
            </Button>
            <Button
              onClick={this.click}
              value="form"
              variant="contained"
              color="secondary"
              style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',  position: 'relative', overflow: 'hidden'  }}
            >
              <div className="top left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', left: '-10px' }}></div>
              <div className="top right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', right: '-10px' }}></div>
              <div className="bottom left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', left: '-10px' }}></div>
              <div className="bottom right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', right: '-10px' }}></div>
              <Link id="form" to="/form" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Form</Link>
            </Button>
            <Button
              onClick={this.click}
              value="dashboard"
              variant="contained"
              color="secondary"
              style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',  position: 'relative', overflow: 'hidden'  }}
            >
              <div className="top left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', left: '-10px' }}></div>
              <div className="top right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', right: '-10px' }}></div>
              <div className="bottom left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', left: '-10px' }}></div>
              <div className="bottom right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', right: '-10px' }}></div>
              <Link id="dashboard" to="/dashboard" style={{ color: '#FFFFFF', textDecoration: 'none' }}>DashBoard</Link>
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
