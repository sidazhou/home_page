import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import TopNavBar from './TopNavBar.jsx';
import SideNavBar from './SideNavBar.jsx';

// this would be the smart component, that feeds data to child, which are dumb

export default class AppController extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
      <div className="row">
        <div className="col-md-12">
          <TopNavBar/>
        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <SideNavBar/>
        </div>

        <div className="col-md-10">
          <Jumbotron>
            {this.props.children}
          </Jumbotron>
        </div>
      </div>
      </div>
    );
  }
}
