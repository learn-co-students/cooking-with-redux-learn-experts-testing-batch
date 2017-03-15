import React, { Component } from 'react';
import { connect } from 'react-redux'
import {ConnectedAddIngredient} from './AddIngredient'
import {ConnectedIngredientsInput} from './AddIngredient'

export class AddIngredients extends Component {
  render(){
    const ingredients = this.props.ingredients.map(ingredient =>
      <li>
        <ConnectedAddIngredient ingredient={ingredient.name}/>
      </li>
    )
    return(
      <div>
        {ingredients}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients}
}

export const ConnectedAddIngredients =  connect(mapStateToProps)(AddIngredients)
