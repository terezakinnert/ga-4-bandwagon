import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';

import { handleChange } from '../../lib/common';


class New extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = handleChange.bind(this);
    this.createBand = this.createBand.bind(this);
  }

  render() {
    return(
      <div>

      </div>
    );
  }
}

export default withRouter(New);
