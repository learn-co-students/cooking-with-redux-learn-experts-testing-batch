import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ConnectedAddIngredients} from '../ingredients/AddIngredients'

export class Recipes extends Component {
  render(){
    const recipes = this.props.recipes.map((recipe, index) =>
      <li key={index}>
        {recipe.name}
        <ConnectedAddIngredients recipeId={recipe.id}/>
      </li>
    )
    return(
        <div>
          <ul>
            {recipes}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    recipes: state.recipes
  }
}

export const ConnectedRecipes = connect(mapStateToProps)(Recipes)
