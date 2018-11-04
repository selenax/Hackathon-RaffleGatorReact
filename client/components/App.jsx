import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Forms from './Forms';
import readAll from './models/readAll';
import About from './About';
import Home from './Home';
import DashBoardContainer from './DashBoardContainer';
import ContactUs from './Contactus';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: null,
    };
  }

  componentDidMount() {
    readAll().then((results) => {
      this.setState({
        contests: results,
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/form" component={Forms} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={DashBoardContainer} />
          <Route path="/contactus" component={ContactUs} />
        </div>
      </BrowserRouter>
    );
  }
}


export default App;
