import uuidV4  from 'uuid/v4';
var id = 0
export default function ingredientsReducer(state = [], action){
  switch(action.type){
    case 'CREATE_INGREDIENT':
      id++
      return [...state, {...action.payload, id: id}]
    default:
      return state;
  }
}
