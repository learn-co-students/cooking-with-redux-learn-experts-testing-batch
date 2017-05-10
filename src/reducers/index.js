import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'
import recipeFormReducer from './recipeForm'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({recipes: recipesReducer, ingredients: ingredientsReducer, recipeForm: recipeFormReducer}, )
