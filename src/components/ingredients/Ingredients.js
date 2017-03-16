import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ConnectedAddIngredient } from './AddIngredient'

export class Ingredients extends Component {
  render(){
    const unselectedIngredients = this.props.unselectedIngredients
    const ingredients = this.props.ingredients.map((ingredient, index) =>{
      if(unselectedIngredients && unselectedIngredients.includes(ingredient)){
        return <ConnectedAddIngredient ingredient={ingredient.name} id={ingredient.id}/>
      } else {
        return <li>{ingredient.name}</li>
      }
      }
      )
    return(
        <div>
          <ul>
            {ingredients}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {ingredients: state.ingredients}
}

export const ConnectedIngredients = connect(mapStateToProps)(Ingredients)
