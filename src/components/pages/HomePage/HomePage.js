import React from 'react';
import Websocket from 'react-websocket';
import ChartBoxContainer from '../../../containers/ChartBoxContainer/ChartBoxContainer';
import './HomePage.scss';

class HomePage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={'HomePage-zone'}>
        <ChartBoxContainer />
      </div>
    );
  }
}

export default HomePage;
