import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { aboutReducer } from './about/about.slice'
import { projectReducer } from './project/project.slice'
import { themeReducer } from './theme/theme.slice'

export const store = configureStore({
	reducer: {
		about: aboutReducer,
		project: projectReducer,
		theme: themeReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
