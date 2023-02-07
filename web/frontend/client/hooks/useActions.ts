import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { aboutActions } from 'src/store/about/about.slice'
import { projectActions } from 'src/store/project/project.slice'
import { themeActions } from 'src/store/theme/theme.slice'

const allActions = {
	...aboutActions,
	...projectActions,
	...themeActions,
}
export const useActions = () => {
	const dispach = useDispatch()

	return bindActionCreators(allActions, dispach)
}
