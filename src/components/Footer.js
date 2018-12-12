import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <footer id="footer">
        <p>Made with ☕️ at GA.</p>
        <p><a href="https://github.com/t-kinnert/wdi-project-4" alt="GitHub repo" target="_blank" rel='noreferrer noopener'><img src="../assets/github-mark.png" width="50px" className="github" /></a></p>
      </footer>
    );
  }
}

export default withRouter(Footer);
