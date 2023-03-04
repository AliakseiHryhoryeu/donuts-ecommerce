import React, { FC } from 'react'

import styles from './QuestionsPopup.module.scss'

export const BagPopup: FC = () => {
	return (
		<div className={styles.header__nav_bag_counter}>
			<div className=''>
				<div className=''>Your bag</div>
				<div className=''>cross svg</div>
			</div>
			<div className='donut component'>
				<div className=''>
					<div className=''>PNG donut</div>
					<div className=''>
						<div className=''>Donut name</div>
						<div className=''>Donut description</div>
					</div>
				</div>
				<div className=''>
					<div className='counter'>
						svg minus
						<p>10</p>
						svg plus
					</div>
					11.22$
				</div>
			</div>
			<div className=''>Total cost:14.14$</div>
			<div className=''>Checkout</div>
		</div>
	)
}

export default BagPopup
