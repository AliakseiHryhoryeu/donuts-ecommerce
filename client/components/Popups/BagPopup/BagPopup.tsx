import React, { FC } from 'react'
import CrossIcon from 'src/components/svg/CrossIcon'
import Background from '../Background/Background'

import styles from './BagPopup.module.scss'
import { BagDonut } from './BagDonut'
import { useActions } from 'src/hooks/useActions'

export const BagPopup: FC = () => {
	const allActions = useActions()

	return (
		<div className={styles.bag}>
			<div className={styles.bag__container}>
				<div className={styles.bag__close}>
					<div>Your bag</div>
					<div
						className={styles.bag__close__btn}
						onClick={() => {
							allActions.toggleBagPopup()
						}}
					>
						<CrossIcon />
					</div>
				</div>

				<div className={styles.donut__container}>
					<BagDonut />
					<BagDonut />
					<BagDonut />
					<BagDonut />
					<BagDonut />
					<BagDonut />
				</div>
				<div className={styles.bag__price__buttons}>
					<div className={styles.bag__price__text}>Total cost:14.14$</div>
					<div className={styles.bag__price__btn}>Checkout</div>
				</div>
			</div>
			<Background />
		</div>
	)
}

export default BagPopup
