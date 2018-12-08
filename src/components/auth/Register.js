import React  from 'react';
import axios from 'axios';

import handleChange from '../../lib/common';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event){
    event.preventDefault();
    // console.log( 'register', this.state);
    axios.post('/api/register', this.state)
      .then(result => {
        console.log('register', result.data);
        this.props.history.push('/login');
      });
  }

  render() {
    return (
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
