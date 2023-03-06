import React, { FC } from 'react'

import styles from './HeaderMenuPopup.module.scss'

export const HeaderMenuPopup: FC = () => {
	return (
		<div className={styles.header__nav_bag_counter}>
			<div className=''>
				<div className=''>
					svg icon
					<p>Dougnuts</p>
				</div>
				<div className=''> svg icon cross</div>
			</div>

			<div className='menu'>
				<div className=''>About us</div>
				<div className=''>Catalog</div>
				<div className=''>
					Bag <div className=''>15</div>
				</div>
				<div className=''>Contacts</div>
			</div>

			<div className='contacts'>
				<div className=''>+1(123)123-45-67</div>
				<div className=''>
					<div className=''>tg svg</div>
					<div className=''>whatsapp svg</div>
					<div className=''>instagram svg</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderMenuPopup
