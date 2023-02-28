import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './collect.module.scss'

export const Collect: FC = () => {
	return (
		<ContainerMaxWidth className={styles.collect__fullContainer}>
			<ContainerWrapper className={styles.collect__container}>
				<div className={styles.collect__leftSection}>
					<div>
						<div className={styles.collect__title}>
							Collect boxes <br />
							for your loved ones!
						</div>
						<div className={styles.collect__description}>
							Choose 3, 6, 9 or 12 donuts, and we will pack them in a festive
							box. You can also choose flowers, a postcard to give a treat to
							your loved ones!
						</div>
					</div>
					<div className={styles.collect__button}>Collect a box</div>
				</div>
				<img src='/static/Collect/gift-box.png' alt='' />
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Collect
