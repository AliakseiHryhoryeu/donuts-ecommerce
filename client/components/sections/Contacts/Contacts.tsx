import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './donuts.module.scss'

export const Contacts: FC = () => {
	return (
		<ContainerMaxWidth className={styles.donuts__container}>
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
			<ContainerWrapper className={styles.donuts__wrapper}>
				<div className='map'></div>
				<div className='contacts'>
					<div className=''>Contacts</div>
					<div className=''>
						<div className=''>Phone number:</div>
						<div className=''>+1 (123) 123-33-44</div>
					</div>
					<div className=''>
						<div className=''>E-mail:</div>
						<div className=''>donuts@gmail.com</div>
					</div>
					<div className=''>
						<div className=''>Address:</div>
						<div className=''>
							324 Main St Carbondale, Pennsylvania(PA), 18407
						</div>
					</div>
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default Contacts
