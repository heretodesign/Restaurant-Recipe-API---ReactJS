import React from 'react';
import { input, button } from "react-bulma-components/full"
// import { Button, Columns, Navbar, Header} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const Form = props => (
  <section className="section">
    <div className="container">
      <div className="columns is-mobile">
        <div className="column is-three-fifths is-offset-one-fifth">
          <form onSubmit={props.getRecipe}>
            <div className="field">
                <div className="control">
                  <input className="input is-large is-rounded is-primary" name="recipeName" type="text" placeholder="Large input" />
                </div>
            </div>
            <input className="button is-large is-fullwidth is-rounded is-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
