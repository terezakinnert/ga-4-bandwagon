import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';
import BandBox from './BandBox';


class CompatibleBands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/findbands')
      .then(result => this.setState({ bands: result.data }));
  }

  render() {
    return(
      <section>
        <h1>All the Bands</h1>
        <div>
          {this.state.bands && this.state.bands.map(band => <BandBox key={band._id} band={band} />)}
        </div>
      </section>
    );
  }
}

export default CompatibleBands;
