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
  }

  clicked() {
    const clickCheck = !this.state.clicked;
    this.setState({
      clicked: clickCheck,
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
          onClick={this.clicked}
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
            this.state.clicked ?
              <ContestPopup 
                title="Fake Contest 3"
                hostName="Johnny Youtuber"
                contestSite="Youtube"
                img="../images/image.jpg"
                startDate="Nov. 3, 2018"
                endDate="Nov. 5, 2018"
                postURL="https://youtube.com/"
                prize="Bag of Chips"
                numContestants="1,593"/> : null
          }
          </div>
      </Wrapper>
    );
  }
}

export default ContestContainer;
