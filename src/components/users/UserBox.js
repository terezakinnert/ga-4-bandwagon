import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function UserBox({ user }) {
  return (
    <Link to={`/users/${user._id}`}>
      <section>
        <div className="columns is-centered is-multiline">
          <div className="column is-3">
            <div className="card">
              <div className="card-image">
                <figure className="image is-3by3">
                  <img src={user.image} width="200px" alt={user.username}/>
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h4 className="title is-4">{user.username}</h4>
                  </div>
                </div>

                <div className="content">
                  {user.username}&apos;s instrument: {user.instrumentsPlayed && user.instrumentsPlayed.name}
                </div>
              </div>
            </div>
          </div>
        </div>



      </section>
    </Link>
  );
}

export default withRouter(UserBox);
