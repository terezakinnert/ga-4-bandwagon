import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function BandBox({ band }) {
  return (
    <section className="band-box">
      <Link to={`/bands/${band._id}`}><h3 className="title is-3">{band.name}</h3></Link>
      <img src={band.image} width="200px" />
      <div>Looking for: {band.lookingForInstrument}</div>
    </section>
  );
}

export default withRouter(BandBox);
