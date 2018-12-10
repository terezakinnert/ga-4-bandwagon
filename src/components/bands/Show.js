import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Show extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`/api/bands/${this.props.match.params.id}`)
      .then(result => {
        this.setState({ band: result.data });
        console.log('band?', this.state.band);
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
              <div>Looking/Not looking</div>
              <div>Which instrument: {band.lookingForInstrument}</div>
              <div>
                <p>Current members:</p>
              </div>
              <p>Website: {band.website}</p>
              <p>Genres: {band.genres}</p>
              <p>Influences: {band.influences}</p>
            </div>
            <div>
              <Link to={`/wonders/${band._id}/edit`}><div>Edit</div></Link>
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
