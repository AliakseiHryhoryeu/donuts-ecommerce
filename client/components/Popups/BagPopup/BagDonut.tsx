import React, { FC, useState } from 'react'
import CrossIcon from 'src/components/svg/CrossIcon'
import MinusIcon from 'src/components/svg/MinusIcon'
import PlusIcon from 'src/components/svg/PlusIcon'

import styles from './BagPopup.module.scss'

export const BagDonut: FC = () => {
	const [count, updateCount] = useState(1)

	const updateCounter = (newValue: number) => {
		if (count + newValue <= 1) {
			updateCount(1)
		} else if (count + newValue >= 30) {
			updateCount(30)
		} else {
			updateCount(count + newValue)
		}
	}

	return (
		<div className={styles.donut}>
			<div>
				<div className={styles.donut__img}>
					<img src='/static/products/donut-1.png' alt='' />
				</div>
				<div className={styles.donut__text__container}>
					<div className={styles.donut__text__title}>Donut name</div>
					<div className={styles.donut__text__description}>
						Donut description
					</div>
				</div>
			</div>
			<div className={styles.donut__counter__component}>
				<div className={styles.donut__counter}>
					<div
						className=''
						onClick={() => {
							updateCounter(-1)
						}}
					>
						<MinusIcon />
					</div>
					<p>{count}</p>
					<div
						className=''
						onClick={() => {
							updateCounter(1)
						}}
					>
						<PlusIcon />
					</div>
				</div>
				11.22$
			</div>
			<div className={styles.donut__cross} onClick={() => {}}>
				<CrossIcon />
			</div>
		</div>
	)
}

export default BagDonut
