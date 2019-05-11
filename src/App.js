import React, { Component } from 'react';
import './App.scss';
import Form from './components/Form.js';
import Recipes from './components/Recipes.js';
import Navbar from './components/Header.js';
import Landing from './components/Landing.js';
import MainFooter from './components/Footer.js';

import './App.scss';


const API_KEY = "bdcd4634f04f6a5f4ad3e5f9eebc5626";


class App extends React.Component {
  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = await fetch(`http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}`);

    const data = await api_call.json();


    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes)
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Form getRecipe={this.getRecipe} />

        <Recipes recipes={this.state.recipes}/>
        <MainFooter />
      </div>
    );
  }
}

export default App;
