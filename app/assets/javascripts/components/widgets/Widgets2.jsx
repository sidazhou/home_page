import React from 'react';
import { Button } from 'react-bootstrap';

var Widgets2 = React.createClass({
  render: function() {
    return (
      <Button bsStyle="primary">Primary</Button>
    );
  }
});

export default Widgets2;

// import React from 'react';

// var Widgets2 = React.createClass({
//   getInitialState: function() {
//     return {liked: false};
//   },
//   handleClick: function(event) {
//     this.setState({liked: !this.state.liked});
//   },
//   render: function() {
//     var text = this.state.liked ? 'like' : 'haven\'t liked';
//     return (
//       <p onClick={this.handleClick}>
//         You {text} this. Click to toggle. -Widgets2
//       </p>
//     );
//   }
// });

// export default Widgets2;
