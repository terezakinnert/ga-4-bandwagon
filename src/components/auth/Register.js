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
    const { target: {name, value} } = event;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    axios.post('/api/register', this.state)
      .then(result => {
        console.log('this.state', this.state, '+ result', result);
        saveToken(result.data.token);
      })
      .then(() => this.props.history.push('/'))
      .catch(() => {
        this.props.history.replace('/login');
      });
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
          <input name="username" type="text" onChange={this.handleChange} />

          <label>Email</label>
          <input name="email" type="email" onChange={this.handleChange} />

          <label>Password</label>
          <input name="password" type="password" onChange={this.handleChange} />

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;
