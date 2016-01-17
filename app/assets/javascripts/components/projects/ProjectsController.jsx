import React from 'react';

export default class ProjectsController extends React.Component {
  render() {
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
}
