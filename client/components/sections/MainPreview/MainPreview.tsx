import { useRouter } from 'next/router'
import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './mainPreview.module.scss'

export const MainPreview: FC = () => {
	const router = useRouter()

	return (
		<>
			<ContainerMaxWidth className={styles.preview__container}>
				<img
					src='/static/MainPreview/preview-bg-top.svg'
					className={styles.preview__bg__top}
					alt=''
				/>
				<img
					src='/static/MainPreview/preview-bg-bottom.svg'
					className={styles.preview__bg__bottom}
					alt=''
				/>
				<ContainerWrapper className={styles.preview__wrapper}>
					<div className={styles.preview__content}>
						<div className={styles.preview__title}>
							Find your <br />
							favorite <span>donut</span>!
						</div>
						<div className={styles.preview__subtitle}>
							Our bakery offers various <br />
							options of donuts
						</div>
						<button
							className={styles.preview__button}
							onClick={() => {
								router.push('/catalog')
							}}
						>
							CHOOSE DONUTS
						</button>
					</div>
				</ContainerWrapper>
			</ContainerMaxWidth>
			<ContainerMaxWidth>
				<ContainerWrapper className={styles.arrange__wrapper}>
					<p>
						Arrange a <span>sweet life</span>
						<br />
						for yourself
					</p>
				</ContainerWrapper>
			</ContainerMaxWidth>
		</>
	)
}

export default MainPreview
