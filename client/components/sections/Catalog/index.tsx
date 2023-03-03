import React, { FC, useEffect, useState } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import Donut from 'src/components/Donut'

import styles from './catalog.module.scss'

export const Catalog: FC = () => {
	return (
		<ContainerMaxWidth>
			<ContainerWrapper className={styles.catalog__container}>
				<div className={styles.catalog__title}>Donuts</div>
				<div className={styles.catalog__filter__container}>
					<div className={styles.catalog__filter}>
						<div className={styles.catalog__filter__input}>
							<div className={styles.catalog__filter__title}>By default</div>
							SVG ICON
							{/* <input type='text' placeholder='Search' /> */}
						</div>
					</div>

					<div className=''>Clear the filter SVG CROSS</div>
				</div>
				<ContainerWrapper className={styles.donuts__wrapper}>
					<Donut />
					<Donut />
					<Donut />
					<Donut />
					<Donut />
					<Donut />
				</ContainerWrapper>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Catalog
