import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { deleteToken, isAuthenticated, decodeToken } from '../lib/auth';

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
    // console.log('user', user);
    return(
      <nav className="navbar">
        <div className="navbar-start">
        </div>
        <div className="navbar-end">
          <div className="tabs is-right">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bands">Browse Bands</Link></li>
              <li>{isAuthenticated() && <Link to="/findbands">Find a Band</Link>}</li>
              <li>{isAuthenticated() && <Link to="/bands/new">Add Your Band</Link>}</li>
              <li><Link to="/users">Browse Musicians</Link></li>
              <li>{isAuthenticated() && <Link to="/findmusicians">Find a Bandmate</Link>}</li>
              <li>{!isAuthenticated() && <Link to="/login">Log In</Link>}</li>
              <li>{!isAuthenticated() && <Link to="/register">Sign Up</Link>}</li>
              <li>{isAuthenticated() && <Link to={`/users/${user.sub}`}>Profile</Link>}</li>
              <li>{isAuthenticated() && <a onClick={this.handleLogout}>Log Out</a>}</li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Header);
