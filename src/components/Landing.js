import React, { Component } from 'react';
import { Columns } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function Landing() {

  return (
    <section className="section is-paddingless-horizontal">
        <div className="container grid is-large notification">
            <div className="firstsection">
                <h1 className="title is-3 has-text-danger">Resturant Recipe Search API</h1>
                <div className="content">
                    <p className="subtitle is-5">RR Search API is built with ReactJS and consumes an API endpoint from the Food2FOOD API. </p>
                </div>
             </div>
        </div>
    </section>
  );
}

export default Landing;
