import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <h2>Welcome to BandWagon!</h2>
      </div>
    );
  }
}

export default withRouter(Home);
