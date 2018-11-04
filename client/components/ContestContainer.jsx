import React, { Component } from 'react';
import styled from 'styled-components';
import ContestListing from './ContestListing';
import ContestPopup from './ContestPopup';
import dummyData from '../../dummyData';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 75%;
	height: auto;
	margin: 25px auto;
`;

class ContestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    // console.log(dummyData);
    return (
      <Wrapper>
        <ContestListing
          title="Fake Contest 3"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
      </Wrapper>
    );
  }
}

export default ContestContainer;
