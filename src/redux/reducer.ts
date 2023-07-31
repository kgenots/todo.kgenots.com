import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import todoReducer from './features/todo-slice'

const combinedReducer = combineReducers({
  todos: todoReducer,
})

// Local Storage 저장
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['todos'],
}

const persistedReducer = persistReducer(persistConfig, combinedReducer)

export default persistedReducer
