import React from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, Input, Button, Glyphicon } from 'react-bootstrap';

export default class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = (event) => {
    // http://buildwithreact.com/article/form-elements
    event.preventDefault();
    window.location.href = `https://www.google.ca/search?q=${this.state.value}`;
  };

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
            <Navbar.Form className="search_form manual-adjustment-1" pullLeft>
              <form onSubmit={this.handleSubmit} >
                <Input type="text" placeholder="Search for knowledge and truths"
                  value={this.state.value}
                  onChange={this.handleChange}
                />
                {' '}
                <Button type="submit" ><Glyphicon glyph="search"/></Button>
              </form>
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
