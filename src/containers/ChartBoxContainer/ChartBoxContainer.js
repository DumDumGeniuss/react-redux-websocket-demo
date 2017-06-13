import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ChartBox from '../../components/boxes/ChartBox/ChartBox';
import * as customerInfoAction from '../../actions/customerInfo';
import './ChartBoxContainer.scss';

class ChartBoxContainer extends React.Component {

  constructor(props) {
    super(props);
    this.dailyCustomers = [0,0,0,0,0,0,0,0,0,0,0,0];
  }

  componentDidMount() {
    this.props.getCustomers(this.dailyCustomers);
  }

  startGettingData() {
    const websocket = new WebSocket('ws://localhost:7000/');
    websocket.onmessage = (event) => {
      this.dailyCustomers.pop();
      this.dailyCustomers.unshift(parseInt(event.data, 10));
      this.props.getCustomers(this.dailyCustomers);
    };
  }

  render() {
    const dailyCustomers = this.props.customerInfo.dailyCustomers;
    return (
      <ChartBox dailyCustomers={dailyCustomers} clickButton={this.startGettingData.bind(this)}/>
    );
  }
}
function mapStateToProps(state) {
  return {
    customerInfo: state.customerInfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCustomers: bindActionCreators(customerInfoAction.getCustomers, dispatch),
  };
}

/**
* Connect Redux with this Component. (Container is on of the design pattern of React-Redux)
*/
export default connect(mapStateToProps, mapDispatchToProps)(ChartBoxContainer);
