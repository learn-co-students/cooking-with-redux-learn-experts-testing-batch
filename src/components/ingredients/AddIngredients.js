import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ConnectedIngredientsInput} from './IngredientsInput'
import {ConnectedIngredients} from './Ingredients'
import {ConnectedAddIngredient} from './AddIngredient'

export class AddIngredients extends Component {
  render(){
    const unselectedIngredients = this.props.unselectedIngredients.map(ingredient =>
      <ConnectedAddIngredient ingredient={ingredient.name} id={ingredient.id} />
    )
    const selectedIngredients = this.props.selectedIngredients.map(ingredient =>
      <li>{ingredient.name}</li>
    )
    return(
      <div>
        <ConnectedIngredientsInput />
        {unselectedIngredients}
        {selectedIngredients}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    ingredients: state.ingredients,
    unselectedIngredients: state.ingredients.filter(ingredient => !state.recipeForm.ingredientIds.includes(ingredient.id)),
    selectedIngredients: state.ingredients.filter(ingredient => state.recipeForm.ingredientIds.includes(ingredient.id))
  }
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
