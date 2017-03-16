import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addRecipe } from '../../actions/recipes'
import { bindActionCreators } from 'redux'
import {ConnectedAddIngredients} from '../ingredients/AddIngredients'

export class RecipesInput extends Component {
  constructor(){
    super()

    this.state = {
      name: "",
      calories: ""
    }
  }

  handleNameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  handleCalorieChange(e){
    this.setState({
      calories: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addRecipe(this.state, this.props.ingredientIds)
  }


  render(){
    return(
      <div>
        RecipesInput Component
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" onChange={this.handleNameChange.bind(this)} value={this.state.name} />
          <input type="text" onChange={this.handleCalorieChange.bind(this)} value={this.state.calories} />
          <input type="submit" />
        </form>
        <ConnectedAddIngredients />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addRecipe: addRecipe}, dispatch)
}

function mapStateToProps(state){
  return {ingredientIds: state.recipeForm.ingredientIds, ingredients: state.ingredients}
}

export const ConnectedRecipesInput = connect(mapStateToProps, mapDispatchToProps)(RecipesInput)
