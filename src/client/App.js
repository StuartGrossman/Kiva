/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import './css/app.css';
import './css/bootstrap.css';
import './css/animated.css';
import './css/custom.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import CareersPage from './components/Careers/CareersPage';
import Footer from './components/Footer';
import FellowshipPage from './components/Fellowships/FellowshipPage';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact={true} path="/" component={CareersPage} />
          <Route exact={true} path="/fellowships" component={FellowshipPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}
export default App;
