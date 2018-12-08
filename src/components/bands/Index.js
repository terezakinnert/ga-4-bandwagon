import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';


class BandIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get('/api/bands')
      .then(result => this.setState({ bands: result.data }));
  }

  render() {
    return(
      <section>
        <h1>All the Bands</h1>
        <div>
          {this.state.bands && this.state.bands.map(
            band =>
          )}
        </div>
      </section>
    );
  }
}

export default BandIndex;

<section className="section">
  <h1 className="title">All the burgers</h1>
  <hr />
  <div className="box-container">
    {this.state.burgers && this.state.burgers.map(
      burger => <BurgerBox key={burger._id} burger={burger}/>
    )}
  </div>
</section>
