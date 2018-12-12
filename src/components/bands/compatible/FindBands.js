import React from 'react';
import axios from 'axios';
// import { Link, withRouter } from 'react-router-dom';
import SelectFind from './SelectFind';

class FindBands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('finding bands', this.state);
    axios.get(`/api/findbands/${this.state.lookingForInstrument}`)
      .then(result => {
        this.setState({ bands: result.data }, () => console.log('this.state', this.state));
        // this.props.history.push('/compatibleBands');
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
    const bands = this.state.bands;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <SelectFind instruments={this.state.instruments} onChange={this.handleChange} />
          <button>Find</button>
        </form>
        {bands && bands.map(band => <div key={band._id}>{band.name}</div>)}
      </div>
    );
  }
}

export default FindBands;


// <p>{users && users.map(user => <p key={user._id}>{user.username}</p>)}</p>
