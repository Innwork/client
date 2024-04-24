import { useAppDispatch } from './redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import ActionsCreators from '../actions'

export const useActions = () => {
	const dispatch = useAppDispatch()
	return bindActionCreators(ActionsCreators, dispatch)
}
