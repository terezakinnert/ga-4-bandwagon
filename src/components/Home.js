import React from 'react';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div>
        <section className="hero has-bg-img is-fullheight is-bold">
          <div className="hero-head has-text-centered">
            <div className="hero-body has-text-centered">
              <div className="container has-text-centered">
                <h1 className="title is-1 home-title">Welcome to BandWagon!</h1>
                <h2 className="subtitle is-2 home-subtitle">Find your new bandmate</h2>
              </div>
            </div>
            <div className="container">
              <div className="button is-grouped has-text-centered signup-button">Sign Up</div>
              <div className="button is-grouped has-text-centered login-button">Log In</div>
            </div>
          </div>
        </section>
        <div className="how-it-works">
          <h4 className="title is-4">How it works</h4>
          <div className="columns is-centered is-multiline">
            <div className="column is-centered is-4-desktop is-6-tablet is-12-mobile circle">Create your or your band&apos;s profile and browse the results.</div>
            <div className="column is-centered is-4-desktop is-6-tablet is-12-mobile circle">Get in touch with the band or musician you think would be a good fit and arrange to meet up.</div>
            <div className="column is-centered is-4-desktop is-6-tablet is-12-mobile circle">When you find your &quot;match&quot;, change your profile to not looking.</div>
          </div>
        </div>
      </div>
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
