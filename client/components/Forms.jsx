import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import addContest from './models/addContest';

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

const StyledFileInputContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const StyledUploadButton = styled.button`
  height: 50px;
  border: 3px solid grey;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 1px;
  color: gray;
`;

const StyledFileInput = styled.input`
  height: 50px;
  width: 145px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
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
    });
  }

  newContest(e) {
    e.preventDefault();
    if (Object.keys(this.state).length !== 8) {
      alert('Please fill in all fields');
    } else {
      addContest(this.state);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <FormContainer>
          <h1 style={{ 'font-family': "'Montserrat', sans-serif", 'text-align': 'center' }}>Fill out the form below to host a giveaway!</h1>
          <form action="">
            <FormField>
              <StyledInput type="text" name="Title" id="Title" placeholder="Enter title of the giveaway" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="Name" id="Name" placeholder="Enter your full name" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledTextArea name="Description" id="Description" rows="10" placeholder="Talk about your giveaway here" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="Social Media Site" id="Social Media Site" placeholder="Social Media Site" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="url" name="URL to post" id="URL to post" placeholder="Enter link to giveaway" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="Prizes" id="Prizes" placeholder="Enter prize(s)" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="Start Date" id="Start Date" placeholder="Enter start date" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <StyledInput type="text" name="End Date" id="End Date" placeholder="Enter end date" onChange={event => this.stateSetter(event)} />
            </FormField>
            <div style={{ 'user-select': 'none', 'padding-left': '9px' }}>
              <StyledSubmit name="Submit" value="Submit" type="submit" onClick={e => this.newContest(e)} />
            </div>
          </form>
        </FormContainer>
      </div>
    );
  }
}

export default Forms;
