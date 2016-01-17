import React from 'react';
import { Link } from 'react-router';
import { Navbar, Input, Button } from 'react-bootstrap';

export default class TopNavbar extends React.Component {
  render() {
    return (
      <Navbar className="navbar navbar-default" role="navigation">
        <img src={'http://placehold.it/31x29&text=top_left.png'} alt="boohoo" className="img-responsive"/>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <Input type="text" placeholder="Search for knowledge and truths"/>
            {' '}
            <Button type="submit">Submit</Button>
          </Navbar.Form>
        </Navbar.Collapse>

        <div className="panel-body">
          Sida Zhou
        </div>

        <div className="panel-body">
          <button className="sd_goto_home" > <Link to={'/'}> Home </Link>  </button>
        </div>

        <img src={'http://placehold.it/165x32&text=top_right.png'} alt="boohoo" className="img-responsive"/>
      </Navbar>
    );
  };
}
