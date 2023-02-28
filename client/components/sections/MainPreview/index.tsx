import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './mainPreview.module.scss'

export const MainPreview: FC = () => {
	return (
		<ContainerMaxWidth className={styles.preview__fullContainer}>
			<ContainerWrapper className={styles.preview__container}>
				<div className={styles.preview__wrapper}>
					<div className={styles.preview__title}>
						Find your <br />
						favorite <span>donut</span>!
					</div>
					<div className={styles.preview__subtitle}>
						Our bakery offers various <br />
						options of donuts
					</div>
					<div className={styles.preview__button}>CHOOSE DONUTS</div>
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default MainPreview
