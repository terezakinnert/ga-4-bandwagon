import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <footer>
        <p>Made with ☕️ at GA.</p>
        <p><a href="https://github.com/t-kinnert/wdi-project-4"><i className="fab fa-github"></i></a></p>
      </footer>
    );
  }
}

export default withRouter(Footer);
