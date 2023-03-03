import React, { FC, useState } from 'react'
import ArrowBottom from 'src/components/svg/ArrowBottom'
import CheckboxDonut from '../CheckboxFilterDonut'

import styles from './colorFilter.module.scss'

export const DefaultFilter: FC = () => {
	const [activePopup, toggleActivePopup] = useState(false)

	return (
		<div className={styles.colorFilter__container}>
			<div
				className={`${styles.colorFilter__main} ${
					activePopup ? styles.colorFilter__main__active : undefined
				}`}
				onClick={() => toggleActivePopup(!activePopup)}
			>
				<div className={styles.colorFilter__main__title}>By default</div>
				<ArrowBottom />
			</div>
			<div
				className={`${styles.colorFilter__popup} ${
					activePopup ? styles.colorFilter__popup__active : undefined
				}`}
			>
				<CheckboxDonut name={'Pink'} />
				<CheckboxDonut name={'Chokolade'} />
				<CheckboxDonut name={'White'} />
				<CheckboxDonut name={'Black'} />
			</div>
		</div>
	)
}

export default DefaultFilter
