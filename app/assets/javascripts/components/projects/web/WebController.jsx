import React from 'react';
import { _ } from 'lodash';
import { Nav, NavItem, Input, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class WebController extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data:
                    [ // should be separate import  // should be api call
                      {
                        id: "1",
                        title: "bla1",
                        html_body: "<h1> halo1 </h1>"
                      },
                      {
                        id: "2",
                        title: "bla2",
                        html_body: "<h1> halo2 </h1>"
                      }
                    ]
                 }
  }

  createMarkup = () => {
    return {__html: _.find(this.state.data, (project) => project.id === this.props.params.id ).html_body };
  };

  componentDidMount() {
    // debugger;
  }
  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey={1}>

          { this.state.data.map(project => (
              <LinkContainer key={`${project.id}`} to={`/projects/web/${project.id}`}>
                <NavItem eventKey={`${project.id}`} >
                  {`${project.title}`}
                </NavItem>
              </LinkContainer>
          ))}

        </Nav>

        <div dangerouslySetInnerHTML={this.createMarkup()} />

      </div>
    );
  }
}

