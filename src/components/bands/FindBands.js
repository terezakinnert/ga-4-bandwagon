import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();
    console.log('finding bands', this.state);
    axios.post('/findbands', this.state)
      .then(result => {
        console.log('register after axios', result.data);
        this.props.history.push('/compatibleBands');
      });
  }

  handleChange({ target: { name, value }}) {
    this.setState({ [name]: value });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <Select />
          <button>Find</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Header);
