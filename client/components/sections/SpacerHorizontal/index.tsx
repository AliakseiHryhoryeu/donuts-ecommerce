import React, { FC } from 'react'

import styles from './spacerHorizontal.module.scss'

interface ISpacerHorizontalProps {
	text: string
}

export const SpacerHorizontal: FC<ISpacerHorizontalProps> = ({ text }) => {
	return (
		<section className={styles.spacer}>
			<p>{text}</p>
			<p>{text}</p>
			<p>{text}</p>
			<p>{text}</p>
			<p>{text}</p>
		</section>
	)
}

export default SpacerHorizontal
