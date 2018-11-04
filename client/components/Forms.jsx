import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const FormField = styled.div`
  border-width: 10px;
  border: 3px solid green;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  height: 30px;
  width: 90%;
`;
const Title = styled.h2`
  font-size: 20px;
  color: white;
`;

const FormContainer = styled.div`
  width: 50%;
  margin: auto;
  border-width: 1px;
  background-color: green;
`;

// const TitleContainer = styled.div`
//   width: 100%;
//   border-width: 1px;
//   border-color: black;
// `;

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

  render() {
    return (
      <div>
        <Header />
        <FormContainer>
          <form method="POST" action="https://formspree.io/">
            <FormField>
              <Title>Title</Title>
              <StyledInput type="text" name="Title" id="Title" size="50" placeholder="Title" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Name</Title>
              <StyledInput type="text" name="Name" id="Name" size="50" placeholder="Full Name" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Description</Title>
              <textarea name="Description" id="Description" rows="10" cols="50" placeholder="Description" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Social Media Site</Title>
              <StyledInput type="text" name="Social Media Site" id="Social Media Site" size="50" placeholder="Social Media Site" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Link to Giveaway</Title>
              <StyledInput type="url" name="URL to post" id="URL to post" size="50" placeholder="Link to Giveaway" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title> Prizes</Title>
              <StyledInput type="text" name="Prizes" id="Prizes" size="50" placeholder="Prizes" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Start Date</Title>
              <StyledInput type="date" nane="Start Date" id="Start Date" size="50" placeholder="Start Date" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>End Date</Title>
              <StyledInput type="date" name="End Date" id="End Date" size="50" placeholder="End Date" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              <Title>Image</Title>
              <StyledInput type="file" name="Image" id="Image" size="50" placeholder="Upload a File" onChange={event => this.stateSetter(event)} />
            </FormField>
            <StyledInput type="submit" />
          </form>
        </FormContainer>
      </div>
    );
  }
}

export default Forms;
