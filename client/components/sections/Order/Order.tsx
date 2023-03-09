import React, { FC, useState } from 'react'
import Donut from 'src/components/Donut/Donut'
import ArrowBottom from 'src/components/svg/ArrowBottom'

import styles from './checkboxDonut.module.scss'

export const OrderSection: FC = () => {
	return (
		<div className={styles.checkboxDonut__item}>
			<div className='left'>
				<div className=''>order for delivery</div>
				<div className=''>
					Fill out the form and our manager will contact you within 15 minutes
					to clarify the details
				</div>
				<form action=''>
					<input type='text' placeholder='Your name' />
					<input type='text' placeholder='Phone number' />
					<div className=''>Delivery address</div>
					<input type='text' placeholder='Street' />
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
						<input type='text' placeholder='CVC + svg'>
							svg
						</input>
					</div>
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
					<div className=''>title</div>
					<div className=''>
						<span>choco-boom</span> <span className='count'>10</span>
					</div>
					<div className=''>
						<span>choco-boom</span> <span className='count'>10</span>
					</div>
					<div className=''>
						<span>choco-boom</span> <span className='count'>10</span>
					</div>
				</div>
				<div className=''>Total cost: 12.22$</div>
			</div>
		</div>
	)
}

export default OrderSection
