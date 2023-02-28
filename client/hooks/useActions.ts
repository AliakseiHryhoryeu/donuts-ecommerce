import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { popupsActions } from 'src/store/popups/popups.slice'
import { userActions } from 'src/store/user/user.slice'

const allActions = {
	...popupsActions,
	...userActions
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
