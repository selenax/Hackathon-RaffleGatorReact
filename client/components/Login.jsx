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
  }

  componentDidMount() {
    this.netlifyIdentity.init();
  }

  setUser() {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata,
    } = netlifyIdentity.currentUser();
    const currentUser = {
      app_metadata,
      created_at,
      confirmed_at,
      email,
      id,
      user_metadata,
    };
    this.setState({
      currentUser,
    });
  }

  login() {
    this.netlifyIdentity.open();
  }

  logout() {
    this.setState({
      user: null,
    });
  }

  render() {
    const actionForm = (
      <span>
        <Button
          variant="contained"
          color="secondary"
          style={{ margin: '10px', color: 'white', background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}
          onClick={ this.login.bind(this) }
        >
        Login / Sign Up
        </Button>
      </span>
    );
    return (
      <div>
        <div>{this.state.currentUser}</div>
        <div>
          {this.state.user
            ? <a onClick={this.logout.bind(this)}>Logout</a>
            : actionForm
          }
        </div>
      </div>
    );
  }
}

export default Login;
