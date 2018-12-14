import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';
import BandBox from './BandBox';


class BandIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/bands')
      .then(result => this.setState({ bands: result.data }, () => console.log('this.state', this.state)));
  }

  render() {
    console.log('bands in render?', this.state.bands);
    return(
      <section>
        <h2 className="title is-2">Browse Bands</h2>
        {this.state.bands && this.state.bands.map(
          band => <BandBox key={band._id} band={band} />
        )}
      </section>
    );
  }
}

export default BandIndex;
