import React, { FC, useState } from 'react'
import Donut from 'src/components/Donut'
import ArrowBottom from 'src/components/svg/ArrowBottom'

import styles from './checkboxDonut.module.scss'

interface ICheckboxDonutProps {
	name: string
}

export const CheckboxDonut: FC<ICheckboxDonutProps> = ({ name }) => {
	const [checked, toggleChecked] = useState(true)

	return (
		<div className={styles.checkboxDonut__item}>
			<label className={`${styles.checkboxDonut__item__label} `}>
				<input
					type='checkbox'
					checked={checked}
					onChange={() => toggleChecked(!checked)}
				/>
				<span className={styles.checkboxDonut__item__label__span}></span>
			</label>
			<p
				onClick={() => {
					toggleChecked(!checked)
				}}
			>
				{name}
			</p>
		</div>
	)
}

export default CheckboxDonut
