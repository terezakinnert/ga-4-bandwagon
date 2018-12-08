import React from 'react';
import axios from 'axios';
// import { withRouter } from 'react-router-dom';

import { saveToken } from '../../lib/auth';
// import { handleChange } from '../../lib/common';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.handleChange = this.handleChange.bind(this);
    this.state.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log('event:', event, 'this.state:', this.state);
    const { target: {name, value} } = event;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(result => {
        this.props.history.push('/');
      })
      .catch(() => );
  }
  //
  // handleSubmit(e) {
  //     e.preventDefault();
  //
  //     axios.post('/api/register', this.state)
  //       .then(res => {
  //         saveToken(res.data.token);
  //       })
  //       .then(() => this.props.history.push('/burgers'))
  //       .catch(() => {
  //         this.props.history.replace('/login');
  //       });
  //   }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input name="username" type="text" onChange={this.handleChange} value={this.state.username || ''} />

          <label>Email</label>
          <input name="email" type="email" onChange={this.handleChange} value={this.state.email || ''} />

          <label>Password</label>
          <input name="password" type="password" onChange={this.handleChange} value={this.state.password || ''} />

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;
