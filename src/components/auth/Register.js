import React  from 'react';
import axios from 'axios';
import Select from './SelectRegister';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log( 'register before axios', this.state);
    axios.post('/api/register', this.state)
      .then(result => {
        console.log('register after axios', result.data);
        this.props.history.push('/login');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  componentDidMount() {
    axios.get('/api/instruments')
      .then(result => {
        this.setState({ instruments: result.data });
        // console.log('instruments?', this.state.instruments);
      });
  }

  render() {
    const instruments = this.state.instruments;
    console.log('this state in render', this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <div className="control">
              <label className="label" htmlFor="name">Username</label>
              <input className="input" name="username" type="username" onChange={this.handleChange} value={this.state.username || ''} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label" htmlFor="email">Email</label>
              <input className="input" name="email" type="email" onChange={this.handleChange} value={this.state.email || ''} />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <label className="label" htmlFor="password">Password</label>
              <input className="input" name="password" type="password" onChange={this.handleChange} value={this.state.password || ''} />
            </div>
          </div>

          <Select onChange={this.handleChange} instruments={instruments} instrumentsPlayed={this.state.instrumentsPlayed || ''} />

          <span>Want to join a band?</span>
          <div>
            <input name="lookingForBands" type="radio" id="yes" onChange={this.handleChange} value="true" />
            <label htmlFor="true">Yes</label>
          </div>
          <div>
            <input name="lookingForBands" type="radio" id="no" onChange={this.handleChange} value="false" />
            <label htmlFor="false">Not right now</label>
          </div>

          <label htmlFor="image">Image URL</label>
          <input name="image" type="text" onChange={this.handleChange} value={this.state.image || ''} />

          <label htmlFor="website">Your website address</label>
          <input name="website" type="text" onChange={this.handleChange} value={this.state.website || ''} />

          <label htmlFor="genres">What kind of music do you play?</label>
          <input name="genres" type="text" onChange={this.handleChange} value={this.state.genres || ''} />

          <label htmlFor="influences">Your influences:</label>
          <input name="influences" type="text" onChange={this.handleChange} value={this.state.influences || ''} />

          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default Register;

// <Select onChange={this.handleChange} instruments={instruments} lookingForInstrument={this.state.lookingForInstrument || ''} />
