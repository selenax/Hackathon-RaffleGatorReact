import React from 'react';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.stateSetter.bind(this);
  }

  stateSetter(event) {
    this.setState({
      [event.target.name]: event.target.value,
    }, (console.log(this.state)));
  }

  render() {
    return (
      <div>
        <form method="POST" action="https://formspree.io/YOUREMAILHERE">
          <label htmlFor="Title">
            Title
            <input type="text" name="Title" id="Title" placeholder="Title" onChange={event => this.stateSetter(event)} />
          </label>
          <label htmlFor="Name">
            Name
            <input type="text" name="Name" id="Name" placeholder="Full Name" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="Description">
            Description
            <textarea name="Description" id="Description" placeholder="Description" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="URL to post">
            URL to post
            <input type="URL to post" name="URL to post" id="URL to post" placeholder="Link to Giveaway" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="Prizes">
            Prizes
            <input type="text" name="Prizes" id="Prizes" placeholder="Prizes" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="Start Date">
            Start Date
            <input type="date" nane="Start Date" id="Start Date" placeholder="Start Date" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="End Date">
            End Date
            <input type="date" name="End Date" id="End Date" placeholder="End Date" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <label htmlFor="Image">
            Image
            <input type="file" name="Image" id="Image" placeholder="Upload a File" onChange={event => this.stateSetter(event)} />
          </label>
          {/* <br /> */}
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
