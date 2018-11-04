import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100vh;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-color: rgba(0,0,0,0.5);
`;

const PopupContainer = styled.div`
	display: absolute;
	height: 400px;
	width: 80%;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: row;
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

class ContestPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper style={{ position: 'relative', overflow: 'hidden' }}>
        <PopupContainer>
          <div
            className="top left"
            style={{
	            position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', left: '-10px',
	          }}
          />
          <div
            className="top right"
            style={{
	            position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', right: '-10px',
	          }}
          />
          <div
            className="bottom left"
            style={{
	            position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', left: '-10px',
	          }}
          />
          <div
            className="bottom right"
            style={{
	            position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', right: '-10px',
	          }}
          />
          <HeaderContainer>
            <div>
              <img alt="Host Profile pic form social media" />
              <h1 style={{ fontSize: '65px', margin: '15px' }}>{this.props.title}</h1>
            </div>
            <div>
              <img alt="social media logo" />
              <h2 style={{ fontSize: '35px', leftMargin: '30px' }}>{this.props.hostName}</h2>
            </div>
          </HeaderContainer>
          <h3 style={{ fontSize: '20px' }}>
	Contest Site:
            {this.props.contestSite}
          </h3>
          {/* IMAGE SOON TO COME MAYBE  <img src={this.props.img} alt="cool thing" /> */}
          <Dates>
            <h4>
	Start Date:
              {this.props.startDate}
            </h4>
            <h4>
	End Date:
              {this.props.endDate}
            </h4>
          </Dates>
          <p>
	URL:
            {this.props.postURL}
          </p>
          <p>
            <strong>Description:</strong>
            {' '}
	Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum urna vel suscipit dictum. Quisque tincidunt magna porta egestas mollis. Suspendisse lobortis dapibus bibendum. Donec posuere eget odio sed vehicula. Sed eget leo a diam vestibulum congue. Phasellus efficitur accumsan est at ultricies. Pellentesque posuere eros sed arcu luctus vulputate.
            {' '}
          </p>
          <ol>
            <li>
	Prizes:
              {this.props.prize}
            </li>
          </ol>
          <p style={{ float: 'right' }}>
	Number of people entered:
            {this.props.numContestants}
          </p>
        </PopupContainer>
      </Wrapper>
    );
  }
}

export default ContestPopup;
