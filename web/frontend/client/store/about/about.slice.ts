import { createSlice } from '@reduxjs/toolkit'
import { IAboutState } from './about.types'

const initialState: IAboutState = {
	resumePdf:
		'https://drive.google.com/file/d/1yb06azuFdnhBu6ML377tNDtoHdcaRCxV',
	resumeDocx:
		'https://docs.google.com/document/d/1ydfuQMcm_8ueKG3AjyiJulpfIBcl2RuN',
}

export const aboutSlice = createSlice({
	name: 'about',
	initialState,
	reducers: {
		// getProject: (state, action: PayloadAction<IProject>) => {
		// 	// state.push(action.payload)
		// },
	},
})

export default aboutSlice.reducer

export const aboutReducer = aboutSlice.reducer
export const aboutActions = aboutSlice.actions
