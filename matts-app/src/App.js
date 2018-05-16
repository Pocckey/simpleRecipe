import React, { Component } from 'react';
import './App.css';
import recipes from "./recipes";
import TableOfRecipe from './components/TableOfRecipe';

export default class App extends Component {
  render() {
    return (
        <div>
          { <TableOfRecipe recipes={recipes} /> }
        </div>
    )
  }
}
