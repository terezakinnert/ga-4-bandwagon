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
            <h3 className="title is-3">{user.username}</h3>
            <img src={user.image} width="300px" />
            <div>
              {user.lookingForBands && <p className="looking">Looking for a band to join</p>}
              {!user.lookingForBands && <p>Not looking for a band to join</p>}
            </div>
            <div>Playing: {user.instrumentsPlayed && user.instrumentsPlayed.name}</div>
            <div>{user.website
              ?
              <p>Website: {user.website}</p>
              :
              <span>No website added</span>}
            </div>
            <div>{user.genres
              ?
              <p>Genres: {user.genres}</p>
              :
              <span>No genres added</span>}
            </div>
            <div>{user.influences
              ?
              <p>Influences: {user.influences && user.influences.map(infl => <span key={infl}>{infl}, </span>)}</p>
              :
              <span>No influences added</span>}
            </div>
            <div>{user.about
              ?
              <p>About: {user.about}</p>
              :
              <span>No website added</span>}
            </div>
            <div>{user.bandsCreated
              ?
              user.bandsCreated.map(bandCreated => <p key={bandCreated._id}>Bands created: {bandCreated.name}</p>)
              :
              <div>No bands created yet.</div>
            }</div>
          </div>
          :
          <p>Just a sec...</p>
        }
      </main>
    );
  }
}

export default Show;
