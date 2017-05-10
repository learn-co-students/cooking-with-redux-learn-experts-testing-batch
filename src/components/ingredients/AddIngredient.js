import React, { Component } from 'react';
import { selectIngredient } from '../../actions/ingredients'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export class AddIngredient extends Component {
  constructor(){
    super()

    this.state = {selected: false}
  }

  handleChange(e){
    this.props.selectIngredient(this.props.id)
    this.setState({
      selected: true
    })
  }

  render(){
    return(
      <li>
        {this.props.ingredient}
        <button onClick={this.handleChange.bind(this)}/>
      </li>
    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({selectIngredient: selectIngredient}, dispatch)
}

export const ConnectedAddIngredient = connect(null, mapDispatchToProps)(AddIngredient)
