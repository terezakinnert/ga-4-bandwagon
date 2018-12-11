import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <section className="hero is-info is-medium is-bold">
        <div className="hero-head">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Welcome to BandWagon!</h1>
              <h2 className="subtitle">Find your next bandmates</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(Home);

{/* <div>
  <h2>Welcome to BandWagon!</h2>
  <h4>Find your next bandmates</h4>
  <div className="login-container">
  <div className="login-box">Sign Up</div>
  <div className="login-box">Log In</div>
</div>
<section>
<h4>How it works</h4>
<div className="home-container">
<div className="home-box">Sign up or login</div>
<div className="home-box">Create your or your band&apos;s profile and browse the results.</div>
<div className="home-box">Get in touch with the band or musician you think would be a good fit and arrange to meet up.</div>
<div className="home-box">When you find your &quot;match&quot;, change your profile to not looking.</div>
</div>
</section>
</div> */}
