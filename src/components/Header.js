import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { deleteToken, isAuthenticated } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/bands">All Bands</Link>
        {isAuthenticated() && <Link to="/bands/new">Add Your Band</Link>}
        {isAuthenticated() && <Link to="/users">All Musicians</Link>}
        {!isAuthenticated() && <Link to="/login">Log In</Link>}
        {isAuthenticated() && <a onClick={this.handleLogout}>Log Out</a>}
        {!isAuthenticated() && <Link to="/register">Sign Up</Link>}
      </nav>
    );
  }
}

export default withRouter(Header);
