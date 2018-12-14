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
        <div className="container has-text-centered">
          <div className="column is-10 is-offset-1">
            <h3 className="title is-3">Register</h3>
            <p className="subtitle is-5">to get the most out of BandWagon</p>
            <form className="box form form-box columns is-centered is-multiline" onSubmit={this.handleSubmit}>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="name">Username</label>
                  <input className="input" name="username" type="username" onChange={this.handleChange} value={this.state.username || ''} />
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="email">Email</label>
                  <input className="input" name="email" type="email" onChange={this.handleChange} value={this.state.email || ''} />
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="password">Password</label>
                  <input className="input" name="password" type="password" onChange={this.handleChange} value={this.state.password || ''} />
                </div>
              </div>

              <Select onChange={this.handleChange} instruments={instruments} instrumentsPlayed={this.state.instrumentsPlayed || ''} />

              <div className="field">
                <span className="label">Want to join a band?</span>
                <div className="radio">
                  <input name="lookingForBands" type="radio" id="yes" onChange={this.handleChange} value="true" />
                  <label htmlFor="true">Yes</label>
                </div>
                <div className="radio">
                  <input name="lookingForBands" type="radio" id="no" onChange={this.handleChange} value="false" />
                  <label htmlFor="false">Not right now</label>
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="image">Image URL</label>
                  <input className="input" name="image" type="text" onChange={this.handleChange} value={this.state.image || ''} />
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="website">Your website address</label>
                  <input className="input" name="website" type="text" onChange={this.handleChange} value={this.state.website || ''} />
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="genres">What kind of music do you play?</label>
                  <input className="input" name="genres" type="text" onChange={this.handleChange} value={this.state.genres || ''} />
                </div>
              </div>

              <div className="field column is-12">
                <div className="control">
                  <label className="label" htmlFor="influences">Your influences:</label>
                  <input className="input" name="influences" type="text" onChange={this.handleChange} value={this.state.influences || ''} />
                </div>
              </div>

              <button className="button">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
