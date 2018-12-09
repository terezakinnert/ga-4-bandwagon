import React from 'react';
import axios from 'axios';
import UserBox from './UserBox';


class UserIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(result => this.setState({ users: result.data }));
  }

  render() {
    return(
      <section>
        <h1>All the Musicians</h1>
        <div>
          {this.state.users && this.state.users.map(
            user => <UserBox key={user._id} user={user} />
          )}
        </div>
      </section>
    );
  }
}

export default UserIndex;
