import React from 'react';
import Widgets from './Widgets.jsx';
import TopNavBar from './TopNavBar.jsx';
import SideNavBar from './SideNavBar.jsx';

// this would be the smart component, that feeds data to child, which are dumb

export default class WidgetsController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message4widget3: ['default_state_1', 'default_state_2'] };
  }


  componentDidMount() {
    $.get('api/v1/messages', function(data) {
      this.setState({
        message4widget3: [data[0].title, data[0].body], // for format look at the api
      });
    }.bind(this));
  }

  render() {
    return (
      <div className="home">
      <div className="row">
        <div className="col-md-12">
          <TopNavBar/>
{/*          <Widgets message4widget3={this.state.message4widget3} />
*/}        </div>
      </div>

      <div className="row">
        <div className="col-md-2">
          <SideNavBar/>
        </div>

        <div className="col-md-10">
        <p>TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT TEXT </p>
        </div>
      </div>
      </div>
    );
  }
}
