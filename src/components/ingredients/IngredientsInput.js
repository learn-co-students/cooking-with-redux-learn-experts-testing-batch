import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createIngredient } from '../../actions/ingredients'
import { bindActionCreators } from 'redux'

export class IngredientsInput extends Component {
  constructor(){
    super()

    this.state = {
      name: '',
      calories: ''
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
    this.props.createIngredient(this.state)
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)} id="name"/>
          <input type="text" value={this.state.calories} onChange={this.handleCalorieChange.bind(this)} id="calories"/>
          <input type="submit" />
        </form>

      </div>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({createIngredient: createIngredient}, dispatch)
}

export const ConnectedIngredientsInput = connect(null, mapDispatchToProps)(IngredientsInput)
