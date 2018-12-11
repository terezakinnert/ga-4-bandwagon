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
    // console.log('bands created', user.bandsCreated);
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
            <div>Playing: {user.instrumentsPlayed && user.instrumentsPlayed.name}</div>
            <p>Website: {user.website}</p>
            <p>Genres: {user.genres}</p>
            <p>Influences: {user.influences}</p>
            <p>Bands created: {user.bandsCreated.name}</p>
          </div>
          :
          <p>Just a sec...</p>
        }
      </main>
    );
  }
}

export default Show;
