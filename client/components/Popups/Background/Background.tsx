import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'

import styles from './Background.module.scss'

export const Background: FC = () => {
	const allActions = useActions()
	return (
		<div
			className={styles.background}
			onClick={() => {
				allActions.closeAllPopups()
			}}
		></div>
	)
}

export default Background
