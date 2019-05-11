import React, { Component } from 'react';
import 'react-bulma-components/dist/react-bulma-components.min.css'


function Navbar() {

  return (
    <section classNameName="hero is-primary is-medium has-background-danger" id="topLand">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href={{}} className="navbar-item">
                <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo" />
              </a>
              <span className="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Home
                </a>
                <a className="navbar-item">
                  Examples
                </a>
                <a className="navbar-item">
                  Documentation
                </a>
                <span className="navbar-item">
                  <a className="button  is-primary is-outlined">
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                    <span>Download</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="firstsection">
              <h1 className="title is-2 has-text-white">Restaurant Recipe Search API</h1>
              <div className="content">
                  <p className="subtitle is-5 has-text-weight-bold has-text-white">RR Search API is built with ReactJS and consumes an API endpoint from the Food2FOOD API. </p>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
