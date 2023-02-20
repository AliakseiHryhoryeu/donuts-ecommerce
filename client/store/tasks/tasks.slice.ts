import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import uuid from 'react-uuid'

import type { RootState } from '../'
import { userApi } from '../user/user.api'
import { taskApi } from './tasks.api'
// import { taskSlice } from '../task/task.slice'
import { userSlice } from '../user/user.slice'

import { ITasksState, ITask } from './tasks.types'

// const LocalStorage_allLists = JSON.parse(localStorage.getItem('allLists'))

const initialState: ITasksState = {
	tasks: [],
}

export const taskSlice = createSlice({
	name: 'taskSlice',
	initialState,
	reducers: {
		updateLocalList: (
			state,
			action: PayloadAction<{ listId: string; title: string }>
		) => {
			// state.allLists.find(list => list._id === action.payload.listId).title =
			// 	action.payload.title
			// localStorage.setItem('allLists', JSON.stringify(state.allLists))
		},
	},

	extraReducers: builder => {
		// READ ALL TASKS
		builder.addMatcher(
			taskApi.endpoints.readAllTasks.matchFulfilled,
			(state, { payload }) => {
				// if (payload.tasks) {
				// 	state.tasks = payload.tasks
				// }
			}
		),
			builder.addMatcher(
				taskApi.endpoints.readTask.matchFulfilled,
				(state, { payload }) => {
					// if (payload) {
					// 	state.tasks.push(payload)
					// }
				}
			),
			builder.addMatcher(
				// CREATE TASK
				taskApi.endpoints.createTask.matchFulfilled,
				(state, { payload }) => {
					// if (payload) {
					// 	state.tasks.push(payload)
					// }
				}
			),
			builder.addMatcher(
				taskApi.endpoints.readTask.matchFulfilled,
				(state, { payload }) => {
					// if (payload) {
					// 	state.tasks
					// 		.filter(item => item._id === payload._id)
					// 		.map(item => {
					// 			// item.tasksId = payload.list.tasksId
					// 			// item.title = payload.list.title
					// 		})
					// }
				}
			),
			builder.addMatcher(
				taskApi.endpoints.updateTask.matchFulfilled,
				(state, { payload }) => {
					// if (payload) {
					// 	state.tasks
					// 		.filter(item => item._id === payload._id)
					// 		.map(item => {
					// 			// item.tasksId = payload.list.tasksId
					// 			// item.title = payload.list.title
					// 		})
					// }
				}
			)
	},
})

export default taskSlice.reducer

export const taskReducer = taskSlice.reducer
export const taskActions = taskSlice.actions
