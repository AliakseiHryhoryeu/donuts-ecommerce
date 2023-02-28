import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './aboutTeam.module.scss'

export const AboutTeam: FC = () => {
	return (
		<ContainerMaxWidth className={styles.team__fullContainer}>
			<ContainerWrapper>
				<div className={styles.team__wrapper}>
					<div className={styles.team__text}>
						<div className={styles.team__title}>The «Doughnuts» team</div>

						<p>
							We use the freshest products, free shipping and the best service!
							We want every customer to be satisfied and contact us again. After
							all, we work every day to make your meal delicious!
						</p>
						<p>
							The «Doughnuts» team has been on the market for about one year.
							During this time, each of us has improved our culinary skills,
							found friends and even fell in love.
						</p>
						<p>
							Teamwork makes everyone more open and tolerant, teaches how to
							interact with other people, establish connections and collaborate
							effectively. Our team is attentive to everyone.
						</p>
						<p>
							A person in a team learns to show empathy, develops emotional
							intelligence, learns to listen, respect, and understand others.
						</p>
						<div className={styles.team__button}>find out more</div>
					</div>
					<img src='/static/AboutTeam/team_photos.png' alt='team-photos' />
				</div>
			</ContainerWrapper>

			<img
				src='/static/AboutTeam/team-bg-top.svg'
				className={styles.team__bg_top}
				alt='team-bg-top'
			/>
			<img
				src='/static/AboutTeam/team-bg-bottom.svg'
				className={styles.team__bg_bottom}
				alt='team-bg-bottom'
			/>
		</ContainerMaxWidth>
	)
}

export default AboutTeam
