export function createIngredient(ingredient){
  return {type: "CREATE_INGREDIENT", payload: ingredient}
}

export function selectIngredient(ingredientId){
  return {type: "SELECT_INGREDIENT", payload: ingredientId}
}
