import { useRouter } from 'next/router'
import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './giftboxPreview.module.scss'

export const GiftboxPreview: FC = () => {
	const router = useRouter()
	return (
		<ContainerMaxWidth className={styles.giftboxPreview__container}>
			<ContainerWrapper className={styles.giftboxPreview__wrapper}>
				<div className={styles.giftboxPreview__leftSection}>
					<div>
						<div className={styles.giftboxPreview__title}>
							Collect boxes <br />
							for your loved ones!
						</div>
						<div className={styles.giftboxPreview__description}>
							Choose 3, 6, 9 or 12 donuts, and we will pack them in a festive
							box. You can also choose flowers, a postcard to give a treat to
							your loved ones!
						</div>
					</div>
					<div
						className={styles.giftboxPreview__button}
						onClick={() => {
							router.push('/giftbox')
						}}
					>
						Collect a box
					</div>
				</div>
				<div className={styles.giftboxPreview__rightSection}>
					<img src='/static/GiftboxPreview/gift-box.png' alt='' />
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default GiftboxPreview
