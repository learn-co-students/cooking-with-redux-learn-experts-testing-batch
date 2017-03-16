export function addRecipe(recipe, ingredientIds){
  return {
    type: "ADD_RECIPE",
    payload: {...recipe, ingredientIds: ingredientIds}
  }
}
