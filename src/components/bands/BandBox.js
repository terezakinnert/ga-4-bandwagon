import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function BandBox({ band }) {
  console.log('band.lookingForInstrument', band.lookingForInstrument.name);
  return (
    <section className="band-box">
      <Link to={`/bands/${band._id}`}><h3 className="title is-3">{band.name}</h3></Link>
      <img src={band.image} width="200px" />
      <div>Looking for: {band.lookingForInstrument.name}</div>
    </section>
  );
}

export default withRouter(BandBox);

//
// function UserBox({ user }) {
//   return (
//     <Link to={`/users/${user._id}`}>
//       <section>
//         <h3>{user.username}</h3>
//         <img src={user.image} width="200px" />
//       </section>
//     </Link>
//   );
// }
//
// export default withRouter(UserBox);
