import React, { Component } from 'react';
import styled from 'styled-components';
import ContestListing from './ContestListing';

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
    };
  }

  render() {
    return (
      <Wrapper>
        <ContestListing
          title="Fake Contest 1"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 2"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
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
        <ContestListing
          title="Fake Contest 4"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 5"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 6"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 7"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 8"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 9"
          hostName="Johnny Youtuber"
          contestSite="Youtube"
          img="../images/image.jpg"
          startDate="Nov. 3, 2018"
          endDate="Nov. 5, 2018"
          postURL="https://youtube.com/"
          prize="Bag of Chips"
          numContestants="1,593"
        />
        <ContestListing
          title="Fake Contest 10"
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
