import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ user: result.data });
        console.log('user?', this.state.user);
      });
  }

  render() {
    const user = this.state.user;
    return(
      <main>
        {user
          ?
          <div>
            <h3>{user.username}</h3>
            <img src={user.image} width="400px" />
            <div>
              {user.lookingForBands && <p>Looking for a band to join</p>}
              {!user.lookingForBands && <p>Not looking for a band to join</p>}
            </div>
            <div>Location: {user.location}</div>
            <div>Playing: <ul>{user.instrumentsPlayed && user.instrumentsPlayed.map(inst => <li key={inst._id}>{inst.name}</li>)}</ul></div>
            <p>Website: {user.website}</p>
            <p>Genres: {user.genres}</p>
            <p>Influences: {user.influences}</p>
          </div>
          :
          <p>Just a sec...</p>
        }
      </main>
    );
  }
}

export default Show;
