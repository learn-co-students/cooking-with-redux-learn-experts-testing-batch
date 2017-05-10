import uuidV4  from 'uuid/v4';
var id = 0
export default function recipesReducer(state = [], action){
  switch(action.type){
    case "ADD_RECIPE":
      id++
      return [...state, {...action.payload, id: id}]
    default:
      return state;
  }
}
