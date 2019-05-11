import React, { Component } from 'react';
import { Columns } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'


function MainFooter() {

  return (
    <footer className="footer has-background-link">
      <div className="content has-text-centered">
        <p>
          <strong className="has-text-white">Built by </strong> <a className="has-text-white" href="https://jgthms.com">Abeldesigns</a> 
        </p>
      </div>
    </footer>
  );
}

export default MainFooter;
