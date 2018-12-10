import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function UserBox({ user }) {
  return (
    <Link to={`/users/${user._id}`}>
      <section>
        <h3>{user.username}</h3>
        <img src={user.image} width="200px" />
      </section>
    </Link>
  );
}

export default withRouter(UserBox);
