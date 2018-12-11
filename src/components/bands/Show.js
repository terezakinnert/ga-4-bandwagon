import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getToken } from '../../lib/auth';

class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get(`/api/bands/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ band: result.data });
        // console.log('band?', this.state.band);
      });
  }

  handleDelete() {
    axios.delete(`/api/bands/${this.props.match.params.id}`,
      { headers: { Authorization: `Bearer ${getToken()}` }})
      .then(() => {
        // console.log('this.props', this.props);
        this.props.history.push('/bands');
      });
  }

  render() {
    const band = this.state.band;
    return(
      <main>
        {band
          ?
          <div>
            <div>
              <h3>{band.name}</h3>
              <img src={band.image} width="400px" />
              <div>
                {band.lookingForMembers && <p>Looking for members</p>}
                {!band.lookingForMembers && <p>Not looking for members</p>}
              </div>
              <div>Which instrument: {band.lookingForInstrument}</div>
              <div>
                <div>Current members:
                  {band.members && band.members.map(member => <p key={member}>{member}</p>)}
                </div>
              </div>
              <p>Website: {band.website}</p>
              <p>Genres: {band.genres}</p>
              <p>Influences: 
                {band.influences && band.influences.map(influence => <span key={influence}>{influence}, </span>)}
              </p>
            </div>
            <div>
              <Link to={`/bands/${band._id}/edit`}><div>Edit</div></Link>
              <div onClick={this.handleDelete}>Delete</div>
              <Link to="/bands"><div>Go Back</div></Link>
            </div>
          </div>
          :
          <p>Just a sec...</p>
        }
      </main>
    );
  }
}

export default Show;
