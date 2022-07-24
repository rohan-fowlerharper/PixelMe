import { configureStore } from '@reduxjs/toolkit'
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

export default store
