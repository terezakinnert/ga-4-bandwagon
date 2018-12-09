import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

import { handleChange } from '../../lib/common';
import { getToken } from '../../lib/auth';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.createBand = this.createBand.bind(this);
  }

  createBand() {
    event.preventDefault();
    axios.post('/api/bands', this.state, { headers: { Authorization: `Bearer ${getToken()}` }})
      .then(result => {
        this.props.history.push(`/bands/${result.data._id}`);
        console.log('this.state', this.state);
      });
  }

  render() {
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

          <label htmlFor="instruments">What instruments do you need your new member to play?</label>
          <input name="instruments" type="text" onChange={this.handleChange} value={this.state.instruments || ''} />

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

          <button>Add this band</button>
        </form>
      </div>
    );
  }
}

export default withRouter(New);
