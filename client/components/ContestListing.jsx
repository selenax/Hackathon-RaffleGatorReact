import React, { Component } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
  width: 27%;
  max-height: 200px;
	padding: 20px;
	margin: 12px;
	padding: 25px;
	background-image: radial-gradient(#ff4245, #fe5855, #fe5855);
`;

const InnerCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%
  padding: 20px;
  margin: 12px;
  padding: 5px;
  border: 3px solid lightgrey;
  background: linear-gradient(45deg, #E63462 30%, #FF8E53 90%);
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-weight: light;
`;

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	text-align: left;
`;

class ContestListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Wrapper onClick={this.props.onClick} style={{position: 'relative', overflow: 'hidden' }}>
        <InnerCont>
          <div className="top left" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', left: '-10px' }}></div>
          <div className="top right" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', top: '-10px', right: '-10px' }}></div>
          <div className="bottom left" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', left: '-10px' }}></div>
          <div className="bottom right" style={{ position: 'absolute', width: '41px', height: '41px', borderRadius: '100%', backgroundColor: 'white', bottom: '-10px', right: '-10px' }}></div>
          <HeaderContainer>
            <h1 style={{ fontSize: '30px', margin: '15px' }}>{this.props.title}</h1>
            <h2 style={{ fontSize: '20px', marginLeft: '15px', marginTop: '0', marginBottom: '0' }}>{this.props.hostName}</h2>
          </HeaderContainer>
          <p style={{ display: 'flex', float: 'right', flexStart: 'flex-end', marginLeft: '15px' }}>
  Number of Entries:
            {this.props.numContestants}
          </p>
        </InnerCont>
      </Wrapper>
    );
  }
}

export default ContestListing;
