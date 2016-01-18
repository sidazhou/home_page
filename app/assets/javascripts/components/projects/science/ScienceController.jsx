import React from 'react';
import { _ } from 'lodash';
import { Nav, NavItem, Input, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import data from './data.js';

export default class WebController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: data.data }; // pretty ugly
  }

  createMarkup = () => {
    return {__html: _.find(this.state.data, (project) => project.id === this.props.params.id ).html_body };
  };

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey={1}>

          { this.state.data.map(project => (
              <LinkContainer key={`${project.id}`} to={`/projects/science/${project.id}`}>
                <NavItem eventKey={`${project.id}`} >
                  <b> {`${project.title}`} </b>
                </NavItem>
              </LinkContainer>
          ))}

        </Nav>

        <div dangerouslySetInnerHTML={this.createMarkup()} />

      </div>
    );
  }
}
