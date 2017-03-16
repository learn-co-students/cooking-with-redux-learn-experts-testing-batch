export default function recipeForm(state = {ingredientIds: []}, action){
  switch(action.type){
    case "SELECT_INGREDIENT":
      return {...state, ingredientIds: [...state.ingredientIds, action.payload]}
    default:
      return state;
  }
}
