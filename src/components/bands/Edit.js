import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { getToken } from '../../lib/auth';
import Select from './Select';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.updateBand = this.updateBand.bind(this);
    console.log('this.state', this.state);
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
    console.log('name:value', name, value);
  }

  updateBand() {
    event.preventDefault();
    axios.put(`/api/bands/${this.props.match.params.id}`, this.state,
      { headers: { Authorization: `Bearer ${getToken()}` }})
      .then(result => {
        this.props.history.push(`/bands/${result.data._id}`);
        console.log('this.state', this.state.band);
      });
  }

  componentDidMount() {
    axios.get('/api/instruments')
      .then(result => {
        this.setState({ instruments: result.data });
        console.log('instruments?', this.state.instruments);
      });
  }

  render() {
    const instruments = this.state.instruments;
    console.log('are we here?');
    return(
      <div>
        <form onSubmit={this.createBand}>
          <label htmlFor="name">Name</label>
          <input name="name" type="name" onChange={this.handleChange} value={this.state.name || ''} />

          <label htmlFor="location">Location</label>
          <input name="location" type="text" onChange={this.handleChange} value={this.state.location || ''} />

          <span>Looking For Members?</span>
          <div>
            <input name="lookingForMembers" type="radio" id="yes" onChange={this.handleChange} value="true" />
            <label htmlFor="true">Yes</label>
          </div>
          <div>
            <input name="lookingForMembers" type="radio" id="no" onChange={this.handleChange} value="false" />
            <label htmlFor="false">Not right now</label>
          </div>

          <Select onChange={this.handleChange} instruments={instruments} lookingForInstrument={this.state.lookingForInstrument || ''} />

          <label htmlFor="image">Image URL</label>
          <input name="image" type="text" onChange={this.handleChange} value={this.state.image || ''} />

          <label htmlFor="members">Who is in your band?</label>
          <input name="members" type="text" onChange={this.handleChange} value={this.state.members || ''} />

          <label htmlFor="website">Your website address</label>
          <input name="website" type="text" onChange={this.handleChange} value={this.state.website || ''} />

          <label htmlFor="genres">What kind of music do you play?</label>
          <input name="genres" type="text" onChange={this.handleChange} value={this.state.genres || ''} />

          <label htmlFor="influences">Your influences:</label>
          <input name="influences" type="text" onChange={this.handleChange} value={this.state.influences || ''} />

          <button>Update this band</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Edit);
