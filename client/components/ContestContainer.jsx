import React, { Component } from 'react';
import styled from 'styled-components';
import ContestListing from './ContestListing';
import ContestPopup from './ContestPopup';
import dummyData from '../../dummyData';
import readAll from './models/readAll';

const Wrapper = styled.div`
	display: flex;
  flex-direction: row;
  flex-wrap: wrap;
	width: 80%;
	height: auto;
	margin: 25px auto;
`;

class ContestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      data: [],
      contest: {},
    };
    this.clicked = this.clicked.bind(this);
    this.renderarr = this.renderarr.bind(this);
  }

  componentDidMount() {
    readAll().then((results) => {
      this.setState({
        data: results,
      });
    });
    // document.getElementById('modal').addEventListener('click', () => {
    //   this.setState({
    //     clicked: true,
    //   });
    // });
  }

  clicked(cont) {
    const clickCheck = !this.state.clicked;
    this.setState({
      clicked: clickCheck,
      contest: cont,
    });
  }

  renderarr() {
    const arr = this.state.data.map((contest) => {
      return (
        <ContestListing
          title={contest.Title}
          hostName={contest.Name}
          contestSite={contest['Social Media Site']}
          img="../images/image.jpg"
          startDate={contest['Start Date']}
          endDate={contest['End Date']}
          postURL={contest['URL to post']}
          prize={contest.Prizes}
          numContestants={Math.floor(Math.random() * 2000)}
          onClick={() => { this.clicked(contest); }}
        />
      );
    });
    return arr;
  }

  render() {
    return (
      <Wrapper>
        { this.state.data.length > 0
          ? this.renderarr.apply() : null
        }
        <div id="popup">
          {
            this.state.clicked
              ? (
                <div
                  id="modal"
                  style={{ display: 'flex',  background: 'rgba(0,0,0,0.7)', zIndex: '1020', width: '100%', height: '100%', position: 'fixed', top: '0',
                    right: '0',
                    bottom: '0',
                    left: '0',
                    justifyContent: 'center',
                    alignContent: 'baseline',
                    alignItems: 'center',
                  }}
                  onClick={(e) => { if(e.target.id === 'modal') {this.setState({ clicked: false }); } }}
                >
                  <ContestPopup
                    title={this.state.contest.Title}
                    hostName={this.state.contest.Name}
                    contestSite={this.state.contest['Social Media Site']}
                    img="https://imgur.com/a/MnC7iYZ"
                    startDate={this.state.contest['Start Date']}
                    endDate={this.state.contest['End Date']}
                    postURL={this.state.contest['URL to post']}
                    prize={this.state.contest.Prizes}
                    numContestants={Math.floor(Math.random() * 2000)}
                  />
                </div>
              ) : null
          }
        </div>
      </Wrapper>
    );
  }
}

export default ContestContainer;
