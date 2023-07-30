import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import logger from 'redux-logger'
import rootReducer from './reducer'

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV === 'development',
})

const makeStore = () => {
  return store
}

const wrapper = createWrapper(makeStore)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default wrapper
