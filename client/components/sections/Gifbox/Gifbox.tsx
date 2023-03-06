import React, { FC, useState } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import CheckboxDonut from 'src/components/Filters/CheckboxFilterDonut'

import styles from './Giftbox.module.scss'

export const GiftboxSection: FC = () => {
	return (
		<ContainerMaxWidth>
			<ContainerWrapper className={styles.giftbox__wrapper}>
				<div className={styles.giftbox__leftSection}>
					<div className={styles.giftbox__title}>Collect the gift box!</div>
					<div className={styles.giftbox__description}>
						Fill out the form and our manager will contact you within 15 minutes
						to clarify the details
					</div>
					<form action=''>
						<div className={styles.giftbox__block}>
							<input
								type='text'
								className={styles.giftbox__input}
								placeholder='Your name'
							/>
							<input
								type='text'
								className={styles.giftbox__input}
								placeholder='Phone number'
							/>
						</div>
						<div className={styles.giftbox__boxCounter__container}>
							<div className={styles.giftbox__label}>
								How many doughnuts are in a box?
							</div>
							<div className={styles.giftbox__boxCounter}>
								<div className={styles.giftbox__boxCounter__counter}>3</div>
								<div
									className={`${styles.giftbox__boxCounter__counter} ${styles.giftbox__boxCounter__counter__activeBox}`}
								>
									6
								</div>
								<div className={styles.giftbox__boxCounter__counter}>9</div>
								<div className={styles.giftbox__boxCounter__counter}>12</div>
							</div>
						</div>
						<div className={styles.giftbox__label}>
							Do you need flowers and a postcard?
						</div>
						<div className={styles.giftbox__checks}>
							<CheckboxDonut name='Yes' />
							<CheckboxDonut name='No' />
							{/* <div className=''>
								<input type='checkbox' />
								<span></span>
								<div className=''>Yes</div>
							</div>
							<div className=''>
								<input type='checkbox' />
								<span></span>
								<div className=''>No</div>
							</div> */}
						</div>
						<div className=''>
							<div className={styles.giftbox__label}>You have chosen</div>
							<div className=''>
								<div className=''>
									<div className=''>Choco-boom</div>
									<div className=''>2</div>
								</div>
							</div>
						</div>
						<div className=''>Delivery address</div>
						<input
							type='text'
							className={styles.giftbox__input}
							placeholder='Street'
						/>
						<div className=''>
							<input type='text' placeholder='House' />
							<input type='text' placeholder='Appartment' />
							<input type='text' placeholder='Floor' />
						</div>
						<div className=''>Payment method</div>
						<div className=''>
							<div className='checkbox'>
								<input type='checkbox' />
								<span></span>
								<label>Bank card</label>
							</div>
							<div className='checkbox'>
								<input type='checkbox' />
								<span></span>
								<label>Bank card on this website</label>
							</div>
							<div className='checkbox'>
								<input type='checkbox' />
								<span></span>
								<label>Cash</label>
							</div>
						</div>
						<input type='text' placeholder='Card number' />
						<div className=''>
							<input type='text' placeholder='Expiration date' />
							<input type='text' placeholder='CVC + svg' />
							svg
						</div>
						<label htmlFor=''>
							test
							<input type='text' placeholder='CVC + svg' />
						</label>
						<div className=''></div>
						Card data is protected. The received data will not be used anywhere.
						<div className=''>
							<input type='checkbox' />
							<div className=''>
								I agree to the terms of personal data processing
							</div>
						</div>
						<button type='submit'>Proceed to checkout</button>
					</form>
				</div>

				<div className='right'>
					<div className=''>
						<img src='' alt='' />
						<div className=''>Sweet life</div>
						<div className=''>2.99$</div>
						<div className=''>svg minus 1 svg plus</div>
					</div>
				</div>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default GiftboxSection
