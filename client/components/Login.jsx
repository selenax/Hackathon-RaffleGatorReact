import React, { Component } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import faunadb from 'faunadb';
import Button from '@material-ui/core/Button';

const q = faunadb.query;

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
    this.netlifyIdentity = netlifyIdentity;
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.setUser = this.setUser.bind(this);
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    this.netlifyIdentity.init();
    if (this.netlifyIdentity.currentUser) {
      this.setUser();
    }
  }

  onLogin() {
    this.netlifyIdentity.on('login', () => {
      this.setUser();
    });
  }

  onLogout() {
    this.netlifyIdentity.on('logout', () => {
      this.setState({
        currentUser: null,
      });
    });
  }

  setUser() {
    const user = netlifyIdentity.currentUser();
    this.setState({
      currentUser: user,
    });
  }

  login() {
    this.netlifyIdentity.open();
    this.onLogin();
  }

  logout() {
    this.netlifyIdentity.open();
    this.onLogout();
  }

  render() {
    const actionForm = (
      <span>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', position: 'relative', overflow: 'hidden' }}
          onClick={this.login}
        >
          <div className="top left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', left: '-10px' }}></div>
          <div className="top right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', top: '-10px', right: '-10px' }}></div>
          <div className="bottom left" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', left: '-10px' }}></div>
          <div className="bottom right" style={{ position: 'absolute', width: '18px', height: '18px', borderRadius: '100%', backgroundColor: 'lightgrey', bottom: '-10px', right: '-10px' }}></div>
        Login / Sign Up
        </Button>
      </span>
    );
    const logout = (
      <span>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
          onClick={this.logout}
        >
        Logout
        </Button>
      </span>
    );
    return (
      <div>
        <div>
          {this.state.currentUser !== null
            ? logout
            : actionForm
          }
        </div>
      </div>
    );
  }
}

export default Login;
