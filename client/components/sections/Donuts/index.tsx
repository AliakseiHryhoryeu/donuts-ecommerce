import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import Donut from 'src/components/Donut'
import CircleIcon from 'src/components/svg/CircleIcon'

import styles from './donuts.module.scss'

export const Donuts: FC = () => {
	return (
		<ContainerMaxWidth className={styles.donuts__container}>
			<ContainerWrapper className={styles.donuts__wrapper}>
				<Donut />
				<Donut />
				<Donut />
				<Donut />
				<Donut />
				<Donut />
				<Donut />
			</ContainerWrapper>
			<div className={styles.donuts__button}>
				<p>all products</p>
				<CircleIcon />
			</div>
		</ContainerMaxWidth>
	)
}

export default Donuts
