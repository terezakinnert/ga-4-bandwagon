import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bands">All Bands</Link>
        <Link to="/bands/new">Add Your Band</Link>
        <Link to="/users">All Musicians</Link>
        <Link to="/register">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </nav>
    );
  }
}

export default withRouter(Header);
