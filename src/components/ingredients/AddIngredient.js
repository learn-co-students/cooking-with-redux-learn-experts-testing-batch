import React, { Component } from 'react';

export class AddIngredient extends Component {
  render(){
    return(
      <div>
        {this.props.ingredient}
      </div>
    )
  }
}

export const ConnectedAddIngredient = AddIngredient
