import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
              <Link to="/register"><div className="button is-grouped has-text-centered signup-button">Sign Up</div></Link>
              <Link to="/login"><div className="button is-grouped has-text-centered login-button">Log In</div></Link>
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
