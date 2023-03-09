import React, { FC, useEffect, useState } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './best.module.scss'

export const BestSlider: FC = () => {
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
		<div className={styles.best__right}>
			<div>
				{slides &&
					slides.map((slide) => {
						return (
							<img
								key={slide.id}
								className={`${
									slide.id == currentSlideId
										? styles.best__slides_item_active
										: styles.best__slides_item
								} `}
								src={slide.image}
								alt='photo'
							/>
						)
					})}
			</div>
			<div className={styles.best__slides__btnContainer}>
				{slides &&
					slides.map((slide) => {
						return (
							<div
								key={slide.id}
								onClick={() => {
									setCurrentSlideId(slide.id)
								}}
								className={`${styles.best__slides_btn} ${
									slide.id == currentSlideId
										? styles.best__slides_btn_active
										: styles.best__slides_btn
								} `}
							></div>
						)
					})}
			</div>
		</div>
	)
}

export default BestSlider
