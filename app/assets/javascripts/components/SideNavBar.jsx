import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Input, Button, Well } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class SideNavBar extends React.Component {
  handleSelect() {}

  render() {
    return (
      <Nav className="side-nav-bar" bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
        <LinkContainer to="/about">
          <NavItem eventKey={1} >About me</NavItem>
        </LinkContainer>

        <LinkContainer to="/project/web">
          <NavItem eventKey={2} >Projects (Web)</NavItem>
        </LinkContainer>

        <LinkContainer to="/project/science">
          <NavItem eventKey={3} >Projects (Science)</NavItem>
        </LinkContainer>

        <LinkContainer to="/contact">
          <NavItem eventKey={4} >Contact me</NavItem>
        </LinkContainer>

        <Well>
{/*          <img src="/images/sidazhou.png" alt="" width="120px" class="img-responsive img-rounded">
*/}
          <p> ImgMissing </p>
          <br/>


          <hr/>
          <b>Email</b><br/>
          sidazhou@gmail.com<br/>
          <hr/>

          <b>Phone</b><br/>
          +1 778 321 7954<br/>
          <hr/>
        </Well>
      </Nav>
    );
  }
}
