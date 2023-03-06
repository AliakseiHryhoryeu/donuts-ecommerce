import { createSlice } from '@reduxjs/toolkit'

import { IPopupsState } from './popups.types'

const initialState: IPopupsState = {
	headerPopup: false,
	bagPopup: false,
	questionsPopup: false
}

export const popupsSlice = createSlice({
	name: 'popupsSlice',
	initialState,
	reducers: {
		toggleHeaderPopup: (state) => {
			state.headerPopup = !state.headerPopup
		},
		toggleBagPopup: (state) => {
			state.bagPopup = !state.bagPopup
		},
		toggleQuestionsPopup: (state) => {
			state.questionsPopup = !state.questionsPopup
		},
		closeAppPopups: (state) => {
			state.headerPopup = false
			state.bagPopup = false
			state.questionsPopup = false
		}
	}
})

export const popupsReducer = popupsSlice.reducer
export const popupsActions = popupsSlice.actions
