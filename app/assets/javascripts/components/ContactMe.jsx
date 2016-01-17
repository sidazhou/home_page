import React from 'react';

export default class ContactMe extends React.Component {
  render() {
    return (
      <div>
        <hr style={{ width: '100%' }}/> <br/>
        <b>Email</b><br/>
        sidazhou@gmail.com<br/>
        <hr/>

        <b>Phone</b><br/>
        +1 778 321 7954<br/>
        <hr/>

        <b>GitHub</b><br/>
        <a href="http://github.com/sidazhou">http://github.com/sidazhou </a><br/>
        <hr/>

        <b>Stack Overflow</b><br/>
        <a href="http://stackoverflow.com/users/2202107/sida-zhou">http://stackoverflow.com/users/2202107/sida-zhou</a><br/>
        <hr/>


        <b>LinkedIn</b><br/>
        <a href="http://ca.linkedin.com/pub/sida-zhou/69/766/42b">http://ca.linkedin.com/pub/sida-zhou/69/766/42b </a><br/>
        <hr/>

        <div notes="hidden" style={{ color: 'white' }}>
          <b>Facebook</b><br/>
          http://www.facebook.com/sidazhou
          <hr/>

          <b>WordPress</b><br/>
          http://sidazhou.wordpress.com/
          <hr/>
        </div>
      </div>
    );
  }
}
