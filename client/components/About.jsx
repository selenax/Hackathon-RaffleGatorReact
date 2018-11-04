import React, { Component } from 'react';
import Header from './Header';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const styling = {
      display: 'flex',
      justifyContent: 'center',
    };
    return (
      <div>
        <Header />
        <div style={styling}>
          <div style={{
            padding: '10px', width: '500px', marginTop: '50px', fontSize: '20px',
          }}
          >
            RaffleGator strives to make Giveaways modern,
            fair and painless for content creators doing
            Giveaways and participants alike.
            <br />
            <br />
            <br />
            Features:
            <br />
            <br />
            - Users will be able to see the ongoing and new Giveaways as well as the hottest trending events!
            <br />
            <br />
            - Search bar capabilities allowing user to find relevant Giveaways!
            <br />
            <br />
            - Content creators can create and keep track of their Giveaways and be able to randomly pick a winner!
            <br />
            <br />
            - Easy sign-up and sign-in using Google+ and Github to start keeping track of all your on-going Giveaways!

          </div>
        </div>
      </div>
    );
  }
}

export default About;
