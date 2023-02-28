import React, { FC } from 'react'

import styles from './best.module.scss'

export const AboutTeam: FC = () => {
	return (
		<section className={styles.best__fullContainer}>
			<img src='@img/best-bg-1.svg' className='best__bg_top' alt='bg img' />
			<img src='@img/best-bg-2.svg' className='best__bg_bottom' alt='bg img' />
			<div className={styles.best__container}>
				<div className={styles.best__left}>
					<p>
						the best in <br />
						the business
					</p>
					<p>
						the best in <br />
						the business
					</p>
					<p className={styles.best__left_active}>
						the best in <br />
						the business
					</p>

					<p>
						the best in <br />
						the business
					</p>
					<p>
						the best in <br />
						the business
					</p>
					<p>
						the best in <br />
						the business
					</p>
					<p>
						the best in <br />
						the business
					</p>
				</div>
				<div className={styles.best__right}>
					<div>
						<img
							className={styles.best__slides_item}
							src='@img/best-photo-slide.png'
							alt='photo'
						/>
						<img
							className={styles.best__slides_item_active}
							src='@img/best-photo-slide.png'
							alt='photo'
						/>
						<img
							className={styles.best__slides_item}
							src='@img/best-photo-slide.png'
							alt='photo'
						/>
						<img
							className={styles.best__slides_item}
							src='@img/best-photo-slide.png'
							alt='photo'
						/>
					</div>
					<div className={styles.best__slides__btnContainer}>
						<div className={styles.best__slides_btn}></div>
						<div
							className={`${styles.best__slides_btn} ${styles.best__slides_btn_active}`}
						></div>
						<div className={styles.best__slides_btn}></div>
						<div className={styles.best__slides_btn}></div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutTeam
