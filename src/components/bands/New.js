import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import { getToken } from '../../lib/auth';
import Select from './Select';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.createBand = this.createBand.bind(this);
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
    // console.log('handleChange name, value', name, value);
  }

  createBand() {
    event.preventDefault();
    axios.post('/api/bands', this.state, { headers: { Authorization: `Bearer ${getToken()}` }})
      .then(result => {
        this.props.history.push(`/bands/${result.data._id}`);
        console.log('this.state after axios post', this.state);
      });
  }

  componentDidMount() {
    axios.get('/api/instruments')
      .then(result => {
        this.setState({ instruments: result.data });
        // console.log('instruments after axios get?', this.state.instruments);
      });
  }

  render() {
    const instruments = this.state.instruments;
    // console.log('this state in render', this.state);
    return(
      <div className="container columns is-centered">
        <div className="column is-12">
          <div className="box columns">
            <form onSubmit={this.createBand}>

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="name">Name</label>
                  <input className="input" name="name" type="name" onChange={this.handleChange} value={this.state.name || ''} />
                </div>
              </div>

              <div className="field">
                <span className="label">Looking For Members?</span>
                <div className="radio">
                  <input name="lookingForMembers" type="radio" id="yes" onChange={this.handleChange} value="true" />
                  <label htmlFor="true">Yes</label>
                </div>
                <div className="radio">
                  <input name="lookingForMembers" type="radio" id="no" onChange={this.handleChange} value="false" />
                  <label htmlFor="false">Not right now</label>
                </div>
              </div>

              <Select className="field" onChange={this.handleChange} instruments={instruments} lookingForInstrument={this.state.lookingForInstrument || ''} />

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="image">Image URL</label>
                  <input className="input" name="image" type="text" onChange={this.handleChange} value={this.state.image || ''} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="members">Who is in your band?</label>
                  <input className="input" name="members" type="text" onChange={this.handleChange} value={this.state.members || ''} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="website">Your website address</label>
                  <input className="input" name="website" type="text" onChange={this.handleChange} value={this.state.website || ''} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="genres">What kind of music do you play?</label>
                  <input className="input" name="genres" type="text" onChange={this.handleChange} value={this.state.genres || ''} />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <label className="label" htmlFor="influences">Your influences:</label>
                  <input className="input" name="influences" type="text" onChange={this.handleChange} value={this.state.influences || ''} />
                </div>
              </div>

              <button className="button">Add this band</button>
              <Link to={`/bands/${this.props.match.params.id}`} className="button"><div>Cancel</div></Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(New);
