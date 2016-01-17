import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Input, Button, Well } from 'react-bootstrap';

export default class SideNavBar extends React.Component {
  handleSelect() {}

  render() {
    return (
      <Nav className="side-nav-bar" bsStyle="pills" stacked activeKey={1} onSelect={this.handleSelect}>
        <NavItem eventKey={1} href="/home">About me</NavItem>
        <NavItem eventKey={2} >Projects (Web)</NavItem>
        <NavItem eventKey={3} >Projects (Science)</NavItem>
        <NavItem eventKey={4} >Contact me</NavItem>
        {/*<Navbar.Text> <h1>ImgMissing</h1> </Navbar.Text>*/}
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
