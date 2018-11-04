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
    const imgStyle = {
      display: 'inline',
      justifyContent: 'space-evenly',
      width: '200px',
      height: '185px',
    };
    return (
      <div>
        <Header />
        <div>
          <h1 style={{
            fontSize: '60px', padding: '20px', marginLeft: '35px', position: 'center',
          }}
          >
            About
          </h1>
        </div>
        <h1 style={{
          fontSize: '60px', padding: '20px', marginTop: '-60px', textAlign: 'center',
        }}
        >
          Features:
        </h1>
        <div style={styling}>
          <div style={{
            padding: '10px', width: '500px', marginTop: '-40px', fontSize: '20px',
          }}
          >
            RaffleGator strives to make Giveaways modern,
            fair and painless for content creators doing
            Giveaways and participants alike.
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
        <div className="powerby">
          <h1 style={{
            fontSize: '60px', padding: '20px', marginLeft: '35px', textAlign: 'center',
          }}
          >
Powered By
          </h1>
          <div id="logos" style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://imgur.com/9QPT3fs.png" alt="formspree" style={imgStyle} />
            <img
              src="https://rp356d2g7k228jd32x871cqq-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/Faunadb.jpg"
              style={{
                display: 'inline', justifyContent: 'space-evenly', width: '290px', height: '220px',
              }}
              alt="faunaDB"
            />
            <img src="http://whyinterviewdave.com/images/netlify.png" alt="netlify" style={imgStyle} />
            <img src="http://www.jsweet.org/wp-content/uploads/2016/04/react-logo.png" alt="reactjs" style={imgStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
