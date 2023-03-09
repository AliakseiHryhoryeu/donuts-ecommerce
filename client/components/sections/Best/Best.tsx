import React, { FC, useEffect, useState } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './best.module.scss'
import BestSlider from './BestSlider'

export const Best: FC = () => {
	const slides = [
		{ id: 0, image: 'static/Best/best-photo-slide.png' },
		{ id: 1, image: 'static/Best/best-photo-slide.png' },
		{ id: 2, image: 'static/Best/best-photo-slide.png' },
		{ id: 3, image: 'static/Best/best-photo-slide.png' },
		{ id: 4, image: 'static/Best/best-photo-slide.png' },
		{ id: 5, image: 'static/Best/best-photo-slide.png' },
		{ id: 6, image: 'static/Best/best-photo-slide.png' },
		{ id: 7, image: 'static/Best/best-photo-slide.png' },
		{ id: 8, image: 'static/Best/best-photo-slide.png' }
	]

	const [currentSlideId, setCurrentSlideId] = useState(2)

	const nextSlide = (prevSlideId: number) => {
		if (prevSlideId == slides.length - 1) {
			return 0
		} else {
			return prevSlideId + 1
		}
	}
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlideId((prevCount) => nextSlide(prevCount))

			if (currentSlideId == slides.length - 1) {
				setCurrentSlideId(0)
			} else {
				const newSlideId = currentSlideId + 1
			}
		}, 4000)
		return () => clearInterval(interval)
	}, [currentSlideId, nextSlide])

	return (
		<ContainerMaxWidth className={styles.best__container}>
			<img
				src='static/Best/best-bg-1.svg'
				className={styles.best__bg_top}
				alt=''
			/>
			<img
				src='static/Best/best-bg-2.svg'
				className={styles.best__bg_bottom}
				alt=''
			/>
			<ContainerWrapper className={styles.best__wrapper}>
				<div className={styles.best__left}>
					<p
						className={`${styles.best__paragraph} ${styles.best__paragraph__border1px}`}
					>
						the best in <br />
						the business
					</p>
					<p className={`${styles.best__paragraph}`}>
						the best in <br />
						the business
					</p>
					<p
						className={`${styles.best__paragraph__active} ${styles.best__paragraph}`}
					>
						the best in <br />
						the business
					</p>

					<p className={`${styles.best__paragraph}`}>
						the best in <br />
						the business
					</p>
					<p
						className={`${styles.best__paragraph} ${styles.best__paragraph__border1px}`}
					>
						the best in <br />
						the business
					</p>
				</div>
				<BestSlider />
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Best
