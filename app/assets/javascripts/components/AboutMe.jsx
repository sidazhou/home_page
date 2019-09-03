import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import projects_web_data from './projects/web/data.js';
import projects_science_data from './projects/science/data.js';
import projects_datasci_data from './projects/datasci/data.js';

export default class AboutMe extends React.Component {
  componentDidMount() {
    $('#linkedin_widget').append(this.createLinkedinWidget().__html);
  }

  createLinkedinWidget() {
    return { __html:
      '<script>delete IN;</script>' + // https://wordpress.org/support/topic/fix-for-linkedin-script-error-duplicate-injs-loaded
      '<script src="//platform.linkedin.com/in.js" type="text/javascript"></script>' +
      '<script type="IN/MemberProfile" data-id="https://www.linkedin.com/pub/sida-zhou/69/766/42b" data-format="inline" data-related="false" data-width="400"></script>',
    };
  }

  render() {
    return (
      <div className="about-me">
        <p>Profile: </p>
        {/*<div dangerouslySetInnerHTML={this.createLinkedinWidget()}></div>*/} {/*didnt quite work*/}
        <div id="linkedin_widget"></div>
        <br/>

        &nbsp;&nbsp;&nbsp;<a href="https://www.dropbox.com/s/psqt1z7z9qsipvv/Sida_Zhou_resume.pdf?dl=0">
          <Button bsStyle="info">
            <Glyphicon glyph="link"/> My Resume
          </Button>
        </a>
        <br/>
        <br/>

        <hr/>
        <hr/>
        <p>Projects (Data Science): </p>
        <div className="row">
          { projects_datasci_data.data.map(project => (
            <div className="col-md-4 thumbnail" key={`${project.id}`}>
                <LinkContainer to={`/projects/web/${project.id}`}>
                  <img ref="sdimg" src={`${project.thumb_url}`} />
                </LinkContainer>
            </div>
          ))}
        </div>

        <hr/>
        <hr/>
        <p>Projects (Web): </p>
        <div className="row">
          { projects_web_data.data.map(project => (
            <div className="col-md-4 thumbnail" key={`${project.id}`}>
                <LinkContainer to={`/projects/web/${project.id}`}>
                  <img ref="sdimg" src={`${project.thumb_url}`} />
                </LinkContainer>
            </div>
          ))}
        </div>

        <hr/>
        <hr/>
        <p>Projects (Science): </p>
        <div className="row">
          { projects_science_data.data.map(project => (
            <div className="col-md-4 thumbnail" key={`${project.id}`}>
                <LinkContainer to={`/projects/science/${project.id}`}>
                  <img src={`${project.thumb_url}`} />
                </LinkContainer>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
