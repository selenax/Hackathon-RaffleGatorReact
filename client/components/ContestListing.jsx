import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
  width: 27%;
  max-height: 200px;
	padding: 20px;
	margin: 12px;
	padding: 25px;
	background-color: #dedede;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	text-align: left;
	height: 15%;
`;

const Dates = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

class ContestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper style={{position: 'relative', overflow: 'hidden' }}>
        <div className="top left" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', left: '-10px' }}></div>
        <div className="top right" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', right: '-10px' }}></div>
        <div className="bottom left" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', left: '-10px' }}></div>
        <div className="bottom right" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', right: '-10px' }}></div>
        <HeaderContainer>
          <h1 style={{ fontSize: '30px', margin: '15px' }}>{this.props.title}</h1>
          <h2 style={{ fontSize: '20px', leftMargin: '30px' }}>{this.props.hostName}</h2>
        </HeaderContainer>
        <h3 style={{ fontSize: '20px' }}>
Contest Site:
          {this.props.contestSite}
        </h3>
        {/* IMAGE SOON TO COME MAYBE  <img src={this.props.img} alt="cool thing" /> */}
        <p>
URL:
          {this.props.postURL}
        </p>
        <p style={{ float: 'right' }}>
Number of people entered:
          {this.props.numContestants}
        </p>
      </Wrapper>
    );
  }
}

export default ContestListing;
