import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';
import SelectFind from './SelectFind';

class FindMusicians extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('finding musicians', this.state);
    axios.get(`/api/findmusicians/${this.state.instrumentsPlayed}`)
      .then(result => {
        this.setState({ users: result.data }, () => console.log('this.state', this.state));
        // this.props.history.push('/compatibleMusicians');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get('/api/instruments')
      .then(result => {
        this.setState({ instruments: result.data });
        // console.log('instruments?', this.state.instruments);
      });
  }

  render() {
    const users = this.state.users;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <SelectFind instruments={this.state.instruments} onChange={this.handleChange} />
          <button>Find</button>
        </form>
        {users && users.map(user => <div>{user.username}</div>)}
      </div>
    );
  }
}

export default FindMusicians;


// <p>{users && users.map(user => <p key={user._id}>{user.username}</p>)}</p>
