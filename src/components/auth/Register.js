import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { saveToken } from '../../lib/auth';
import { handleChange } from '../../lib/common';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.handleChange = handleChange.bind(this);
    this.state.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(result => {
        saveToken(result.data.token);
      })
      .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.history.replace('/login');
      });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
          <input name="username" onChange={this.handleChange} />

          <label>Email</label>
          <input name="email" onChange={this.handleChange} />

          <label>Password</label>
          <input name="password" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default withRouter(Register);
