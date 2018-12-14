import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function BandBox({ band }) {
  // console.log('band.lookingForInstrument in bandbox', band.lookingForInstrument);
  return (
    <Link to={`/bands/${band._id}`}>
      <div className="columns is-centered is-multiline">
        <div className="column is-3">
          <div>
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by3">
                  <img src={band.image} alt={band.name}/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h4 className="title is-4">{band.name}</h4>
                  </div>
                </div>
                <div className="content">
                  Looking for: {band.lookingForInstrument && band.lookingForInstrument.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default withRouter(BandBox);
