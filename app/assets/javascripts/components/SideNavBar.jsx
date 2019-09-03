import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Input, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class SideNavBar extends React.Component {
  render() {
    return (
      <Nav className="side-nav-bar" bsStyle="pills" stacked activeKey={1} >
        <LinkContainer to="/about">
          <NavItem eventKey={1} >About me</NavItem>
        </LinkContainer>

        <LinkContainer to="/projects/datasci">
          <NavItem eventKey={2} >Projects (Data Science)</NavItem>
        </LinkContainer>

        <LinkContainer to="/projects/web">
          <NavItem eventKey={3} >Projects (Web)</NavItem>
        </LinkContainer>

        <LinkContainer to="/projects/science">
          <NavItem eventKey={4} >Projects (Science)</NavItem>
        </LinkContainer>

        <LinkContainer to="/contact">
          <NavItem eventKey={5} >Contact me</NavItem>
        </LinkContainer>

        <Well>
          <img src={'/images/sidazhou.png'}/>

          <br/>


          <hr/>
          <b>Email</b><br/>
          sidazhou@gmail.com<br/>
          <hr/>

          <b>Phone</b><br/>
          +86 185 1065 1801<br/>
          <hr/>
        </Well>
      </Nav>
    );
  }
}
