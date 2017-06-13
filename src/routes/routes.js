import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import HomePage from '../components/pages/HomePage/HomePage';
import MainLayout from '../components/layouts/MainLayout/MainLayout';

class Routers extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <MainLayout>
            <Route exact path='/' component={HomePage} />
          </MainLayout>
        </Switch>
      </Router>
    );
  }
}

export default Routers;
