import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const FormField = styled.div`
  margin-bottom: 5px;
`;
const StyledInput = styled.input`
  padding-left: 10px;
  height: 40px;
  width: 100%;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  font-size: 20px;
  border-radius: 5px;
  border: 5px;
  font-family: 'Montserrat', sans-serif;
`;
const StyledTextArea = styled.textarea`
  width: 100%;
  padding-left: 10px;
  border-radius: 5px;
  font-size: 20px;
  resize: none;
  border: 5px;
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
  font-family: 'Montserrat', sans-serif;
`;
const FormContainer = styled.div`
  width: 80%;
  max-width: 1125px;
  height: 100%;
  margin: auto;
  border: 1px;
`;
const StyledSubmit = styled.input`
  height: 50px;
  width: 100%;
  font-size: 20px;
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  &:hover {
    box-shadow: inset 0 0 10px #000000;
  }
  &:active {
    transform: translateY(1px);
  }
`;

class Forms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.stateSetter.bind(this);
  }

  stateSetter(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, () => console.log(this.state));
  }

  render() {
    return (
      <div>
        <Header />
        <FormContainer>
          <h1 style={{ 'font-family': "'Montserrat', sans-serif", 'text-align': 'center' }}>Fill out the form below to send a help ticket!</h1>
          <form action="https://formspree.io/alanfu@live.com" method="POST">
            <FormField>
              <StyledInput type="text" name="Name" id="Name" placeholder="Enter your full name" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="Email" id="Email" placeholder="Enter your full email" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledTextArea name="Description" id="Description" rows="10" placeholder="Describe what is problem you are experiencing" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledTextArea name="Other" id="Other" rows="5" placeholder="Any additional information you would like us to know?" onChange={event => this.stateSetter(event)} />
            </FormField>
            <div style={{ 'user-select': 'none', 'padding-left': '9px' }}>
              <StyledSubmit value="Submit" type="submit" />
            </div>
          </form>
        </FormContainer>
      </div>
    );
  }
}
export default Forms;
