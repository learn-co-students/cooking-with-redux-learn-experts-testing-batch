import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ConnectedIngredientsInput} from './IngredientsInput'
import {ConnectedIngredients} from './Ingredients'
import {ConnectedAddIngredient} from './AddIngredient'

export class AddIngredients extends Component {
  render(){
    const unselectedIngredients = this.props.unselectedIngredients ?
    this.props.unselectedIngredients.map(ingredient =>
      <ConnectedAddIngredient ingredient={ingredient.name} id={ingredient.id} />
    ) : null
    const selectedIngredients = this.props.selectedIngredients ?
    this.props.selectedIngredients.map(ingredient =>
      <li>{ingredient.name}</li>
    ) : null
    return(
      <div>
        <ConnectedIngredientsInput />
        {unselectedIngredients}
        {selectedIngredients}
        <ConnectedIngredients />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients, ingredientIds: state.recipeForm.ingredientIds}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
