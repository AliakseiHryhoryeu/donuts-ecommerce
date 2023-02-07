import React, { FC, useState } from 'react'
import { useTypedSelector } from 'src/hooks/useTypedSelector'

import styles from './slides.module.scss'
import { RootState } from 'src/store'

interface ISliderProps {
	props: string[] | undefined
}

export const Slider: FC<ISliderProps> = ({ props }) => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	let slides = [
		'/static/slider/cat-1.jpg',
		'/static/slider/cat-2.jpg',
		'/static/slider/cat-3.jpg',
		'/static/slider/cat-4.jpg',
		'/static/slider/cat-5.jpg',
		'/static/slider/cat-6.jpg',
		'/static/slider/cat-7.jpg',
		'/static/slider/cat-8.jpg',
	]
	props !== undefined ? (slides = props) : ''

	const arrows = {
		arrowNext: '/static/slider/arrow-right.svg',
		arrowPrev: '/static/slider/arrow-left.svg',
	}
	const [current, setCurrent] = useState(0)
	const nextSlide = () => {
		setCurrent(current === slides.length - 1 ? 0 : current + 1)
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? slides.length - 1 : current - 1)
	}

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null
	}

	return (
		<div className={`${styles[`slider_${theme}`]} ${styles.slider}`}>
			<div className={`${styles.slider__main}`}>
				<div className={`${styles.slider__main__container}`}>
					<img
						src={arrows.arrowNext}
						alt='prevSlide'
						title='prev slide'
						className={`${styles.slider__arrow} ${styles.slider__arrow__prev}`}
						onClick={prevSlide}
						height={60}
						width={40}
					/>
					{slides.map((slide, index) => {
						return (
							<div
								className={
									index === current
										? `${styles.slider__slide__active}`
										: `${styles.slider__slide}`
								}
								key={index}
								title='next slide'
							>
								{index === current && (
									<img
										src={slide}
										alt='slide'
										className={`${styles.slider__slide__item}`}
										onClick={nextSlide}
									/>
								)}
							</div>
						)
					})}
					<img
						src={arrows.arrowPrev}
						alt='nextSlide'
						title='next slide'
						className={`${styles.slider__arrow} ${styles.slider__arrow__next}`}
						onClick={nextSlide}
						height={60}
						width={40}
					/>
				</div>
			</div>
			<div className={`${styles.slider__nav}`}>
				{slides.map((slide, index) => {
					return (
						<div key={index} className={`${styles.slider__nav__item}`}>
							<img
								src={slide}
								alt='slide'
								className={`${styles.slider__nav__img}`}
								onClick={() => setCurrent(index)}
							/>
						</div>
					)
				})}
			</div>
		</div>
	)
}
