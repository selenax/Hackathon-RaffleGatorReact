import React, { Component } from 'react';

class ContestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.hostName}</h2>
        <h3>
Contest Site:
          {this.props.contestSite}
        </h3>
        <img src={this.props.img} alt="cool thing" />
        <div>
          <h4>
Start Date:
            {this.props.startDate}
          </h4>
          <h4>
End Date:
            {this.props.endDate}
          </h4>
        </div>
        <p>
URL:
          {this.props.postURL}
        </p>
        <p>Description:</p>
        <ol>
          <li>{this.props.prize}</li>
        </ol>
        <p>
Number of people entered:
          {this.props.numContestants}
        </p>
      </div>
    );
  }
}

export default ContestListing;
