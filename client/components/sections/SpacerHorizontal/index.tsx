import React, { FC } from 'react'

import styles from './spacerHorizontal.module.scss'

interface ISpacerHorizontalProps {
	text: string
}

export const SpacerHorizontal: FC<ISpacerHorizontalProps> = ({ text }) => {
	return (
		<section className={styles.spacer}>
			<p className={styles.spacer__paragraph}>{text}</p>
			<p className={styles.spacer__paragraph}>{text}</p>
			<p className={styles.spacer__paragraph}>{text}</p>
			<p className={styles.spacer__paragraph}>{text}</p>
			<p className={styles.spacer__paragraph}>{text}</p>
		</section>
	)
}

export default SpacerHorizontal
