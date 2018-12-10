import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { deleteToken, isAuthenticated, getLoggedInUser, decodeToken } from '../lib/auth';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    deleteToken();
    this.props.history.push('/');
  }

  render() {
    const user = decodeToken();
    console.log('user', user);
    return(
      <nav>
        <Link to="/">Home</Link>
        {isAuthenticated() && <Link to="/bands">All Bands</Link>}
        {isAuthenticated() && <Link to="/bands/new">Add Your Band</Link>}
        {isAuthenticated() && <Link to="/users">All Musicians</Link>}
        {!isAuthenticated() && <Link to="/login">Log In</Link>}
        {!isAuthenticated() && <Link to="/register">Sign Up</Link>}
        {isAuthenticated() && !!getLoggedInUser()}<Link to={`/users/${user.sub}`}>Profile</Link>
        {isAuthenticated() && <a onClick={this.handleLogout}>Log Out</a>}
      </nav>
    );
  }
}

export default withRouter(Header);
