import React, { Component } from 'react';
import ContestListing from './ContestListing';

class ContestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}

export default ContestContainer;
