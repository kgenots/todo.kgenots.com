import { combineReducers } from 'redux'
import todoReducer from './features/todo-slice'

const combinedReducer = combineReducers({
  todos: todoReducer,
})

export default combinedReducer
