import React from 'react';
import ReactHighcharts from 'react-highcharts';
import './ChartBox.scss';

class ChartBox extends React.Component {

  constructor(props) {
    super(props);
    this.chartName = '';
  }

  componentDidMount() {
  }

  handleChange(event){
    this.chartName = event.target.value;
  }

  _onClick(event) {
    this.props.clickButton(event);
  }

  render() {
    const config = {
      title: {
        text: 'Daily Customers'
      },
      xAxis: {
        categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']
      },
      series: [{
        data: this.props.dailyCustomers,
      }]
    };

    return (
      <div className={'ChartBox-zone'}>
        <div className={'ChartBox-functionZone'}>
          <input onChange={this.handleChange.bind(this)}/>
          <button onClick={this._onClick.bind(this)}>{'click me'}</button>
        </div>
        <div>
          <ReactHighcharts config = {config}/>
        </div>
      </div>
    );
  }
}

export default ChartBox;
