import { IProject, IProjectState } from './project.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { projectsData } from './data'

const initialState: IProjectState = {
	projects: [...projectsData],
}

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		// getProjectsData: (state, action: PayloadAction<{}>) => {
		// 	state.projects.push(...projectsData)
		// },
	},
})

export default projectSlice.reducer

export const projectReducer = projectSlice.reducer
export const projectActions = projectSlice.actions
