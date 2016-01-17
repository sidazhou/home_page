import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, Input, Button } from 'react-bootstrap';

export default class TopNavBar extends React.Component {
  render() {
    return (
      <Navbar className="top-nav-bar">
        <Navbar.Header>
          <Navbar.Brand>
            <div><img src={'/images/top_left.png'}/></div>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse role="navigation" className="top-nav-bar">
          <Nav>
            <Navbar.Form className="manual-adjustment-1" pullLeft>
              <Input type="text" placeholder="Search for knowledge and truths"/>
              {' '}
              <Button type="submit">Submit</Button>
            </Navbar.Form>
          </Nav>

          <Nav pullRight>
            <Navbar.Text className="manual-adjustment-2"> Sida Zhou </Navbar.Text>
            <Link to="/"> <Navbar.Text className="manual-adjustment-2"> Home </Navbar.Text> </Link>
            <Navbar.Text>
              <img src={'/images/top_right.png'}/>
            </Navbar.Text>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

          // <Navbar.Text>
          //   <img src={'/images/top_left.png'}/>
          // </Navbar.Text>
