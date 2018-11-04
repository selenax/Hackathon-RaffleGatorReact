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
  width: 75%;
  height: 100%;
  margin: auto;
  border: 1px;
`;

const StyledSubmit = styled.input`
  height: 50px;
  width: 100%;
  font-size: 20px;
  background-color: red;
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
          <h1>Fill out the form below to host a giveaway!</h1>
          <form method="POST" action="https://formspree.io/">
            <FormField>
              {/* <Title>Title</Title> */}
              <StyledInput type="text" name="Title" id="Title" placeholder="Title" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Name</Title> */}
              <StyledInput type="text" name="Name" id="Name" placeholder="Full Name" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Description</Title> */}
              <StyledTextArea name="Description" id="Description" rows="10" placeholder="Description" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Social Media Site</Title> */}
              <StyledInput type="text" name="Social Media Site" id="Social Media Site" placeholder="Social Media Site" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Link to Giveaway</Title> */}
              <StyledInput type="url" name="URL to post" id="URL to post" placeholder="Link to Giveaway" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title> Prizes</Title> */}
              <StyledInput type="text" name="Prizes" id="Prizes" placeholder="Prizes" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Start Date</Title> */}
              <StyledInput type="text" name="Start Date" id="Start Date" placeholder="mm/dd/yyyy" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
            {/* <Title>End Date</Title> */}
              <StyledInput type="text" name="End Date" id="End Date" placeholder="mm/dd/yyyy" onChange={event => this.stateSetter(event)} />
            </FormField>
            <FormField>
              {/* <Title>Image</Title> */}
              <StyledFileInputContainer>
                <StyledUploadButton>Upload Image</StyledUploadButton>
                <StyledFileInput type="file" name="Image" />
              </StyledFileInputContainer>
            </FormField>
            <FormField>
              <StyledSubmit type="submit" />
            </FormField>
          </form>
        </FormContainer>
      </div>
    );
  }
}

export default Forms;
