import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

// import { themeActions } from 'src/store/theme/theme.slice'

const allActions = {
	// ...themeActions,
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
