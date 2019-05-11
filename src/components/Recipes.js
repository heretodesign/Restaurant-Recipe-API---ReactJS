import React, { Component } from 'react';
import { Button, Columns, Section, Container} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const Recipes = props => (

  <div>
    { props.recipes.map((recipe) => {
      return (
        <div key={recipe.recipe_id}>
          <section className="section">
            <div className="container notification">
              <div className="title">
                <img src={recipe.image_url} alt={recipe.title} />
              </div>
              <h2 className="subtitle">
                <p>{ recipe.title }</p>
              </h2>
            </div>
          </section>
        </div>
      );
  })}
  </div>
);

export default Recipes;
