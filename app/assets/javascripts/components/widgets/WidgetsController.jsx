import React from 'react';
import Widgets from './Widgets.jsx';
import TopNavbar from './TopNavbar.jsx';

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
      <div className="container">
        <p>I'm WidgetsController</p>
        <TopNavbar/>
        <Widgets message4widget3={this.state.message4widget3} />
      </div>
    );
  }
}
