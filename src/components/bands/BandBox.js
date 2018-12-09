import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function BandBox({ band }) {
  return (
    <Link to={`/bands/${band._id}`}>
      <section className="band-box">
        <h3>{band.name}</h3>
        <img src={band.image} width="200px" />
      </section>
    </Link>
  );
}

export default withRouter(BandBox);
