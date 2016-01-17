import React from 'react';
import Widgets2 from './Widgets2.jsx';
import Widgets3 from './Widgets3.jsx';
import Widgets3button from './Widgets3button.jsx';
import Widgets4 from './Widgets4.jsx';

export default class Widgets extends React.Component {
  render() {
    return (
      <div>
      	<p>I'm Widgets.jsx</p>
        <Widgets2></Widgets2>
        <Widgets3 message={this.props.message4widget3} ></Widgets3>
        <Widgets3button/>
        <Widgets4></Widgets4>
      </div>
    );
  }
}
