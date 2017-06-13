import React from 'react';
import './MainLayout.scss';

class MainLayout extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={'MainLayout-zone '}>
        <nav className={'MainLayout-navbar'}>
          <div>
          </div>
        </nav>
        <div className={'MainLayout-content'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
