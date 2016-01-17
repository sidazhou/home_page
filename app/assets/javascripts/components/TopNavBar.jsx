import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Input, Button } from 'react-bootstrap';

export default class TopNavBar extends React.Component {
  render() {
    return (
      <Navbar className="top-nav-bar">
        <Navbar.Header>
          <Navbar.Brand>
            {/*<img src={'http://placehold.it/31x29&text=top_left.png'} alt="boohoo" className="img-responsive"/>*/}
            ImgMissing
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>


        <Navbar.Collapse role="navigation" className="top-nav-bar">
          <Nav>
            <Navbar.Form pullLeft>
              <Input type="text" placeholder="Search for knowledge and truths"/>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
            <Navbar.Text> Sida Zhou </Navbar.Text>
            <Link to="/"> <Navbar.Text> Home </Navbar.Text> </Link>
          </Nav>

          <Nav pullRight>
            {/*<img src={'http://placehold.it/165x32&text=top_right.png'} alt="boohoo" className="img-responsive"/>*/}
            <Navbar.Text> ImgMissing </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
