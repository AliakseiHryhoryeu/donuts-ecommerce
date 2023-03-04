import React, { FC } from 'react'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './QuestionsPopup.module.scss'

export const QuestionsPopup: FC = () => {
	return (
		<ContainerWrapper className={styles.header__nav_bag_counter}>
			<div className=''>img</div>
			<div className=''>
				<div className=''>
					<p>Any other questions?</p>
					<p>
						Fill out the form and our manager will contact you within 15 minutes
						to clarify the details
					</p>
					<form action=''>
						<input placeholder='Your name' type='text' />
						<input placeholder='Phone number' type='text' />
						<button type='submit'>Callback</button>
					</form>
				</div>
			</div>
		</ContainerWrapper>
	)
}

export default QuestionsPopup
