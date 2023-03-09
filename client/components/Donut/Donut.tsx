import React, { FC, useState } from 'react'
import MinusIcon from 'src/components/svg/MinusIcon'
import PlusIcon from 'src/components/svg/PlusIcon'

import styles from './donut.module.scss'

interface DonutProps {
	id: string
	title: string
	price: number
	description: string
}

export const Donut: FC = () => {
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
		<div className={styles.donuts__container}>
			<div className={styles.donuts__description__container}>
				<img src='static/products/donut-1.png' alt='product-img' />
				<div className={styles.donuts__description__wrapper}>
					<div className={styles.donuts__title}>Sweet life</div>
					<div className={styles.donuts__price}>2.99$</div>
					<div className={styles.donuts__text}>
						Feel the taste of summer: wonderful dough with strawberry filling
					</div>
				</div>
			</div>
			<div className={styles.donuts__row}>
				<div className={styles.donuts__counter}>
					<div
						onClick={() => {
							updateCounter(-1)
						}}
					>
						<MinusIcon />
					</div>
					<p>{count}</p>
					<div
						onClick={() => {
							updateCounter(1)
						}}
					>
						<PlusIcon />
					</div>
				</div>
				<div tabIndex={1} className={styles.donuts__row_btn}>
					<span> Add to bag</span>
				</div>
			</div>
		</div>
	)
}

export default Donut
