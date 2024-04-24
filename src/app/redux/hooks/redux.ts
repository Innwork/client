import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {RootState, store} from '../store'

type AppDispatchType = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()
