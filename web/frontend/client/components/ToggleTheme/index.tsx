import React, { FC } from 'react'
// import classNames from 'classnames'

import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { useActions } from 'src/hooks/useActions'
import { RootState } from 'src/store'

import { SunIcon } from './img/SunIcon'
import { MoonIcon } from './img/MoonIcon'

import themeStyles from './toggleTheme.module.scss'

export const ToggleTheme: FC = () => {
	const allActions = useActions()
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		// className={classNames('toggleTheme', `toggleTheme-${theme}`)}
		<label
			className={`${themeStyles.toggleTheme} ${
				themeStyles[`toggleTheme_${theme}`]
			}`}
		>
			<MoonIcon />
			<input
				id='toggleThemeCheckbox'
				type='checkbox'
				checked={theme === 'light' || false}
				onChange={() => allActions.toggleTheme()}
				className={themeStyles.toggleTheme_checkbox}
			/>
			<span className={themeStyles.toggleTheme_span}></span>
			<SunIcon />
		</label>
	)
}
