import React, { FC } from 'react'

const PlusIcon: FC = () => {
	return (
		<svg
			width='20'
			height='20'
			viewBox='0 0 20 20'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx='10' cy='10' r='9.5' stroke='#655D5D' />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M10.5 6C10.5 5.72386 10.2761 5.5 10 5.5C9.72386 5.5 9.5 5.72386 9.5 6V9.5H6C5.72386 9.5 5.5 9.72386 5.5 10C5.5 10.2761 5.72386 10.5 6 10.5H9.5V14C9.5 14.2761 9.72386 14.5 10 14.5C10.2761 14.5 10.5 14.2761 10.5 14V10.5H14C14.2761 10.5 14.5 10.2761 14.5 10C14.5 9.72386 14.2761 9.5 14 9.5H10.5V6Z'
				fill='#655D5D'
			/>
		</svg>
	)
}

export default PlusIcon
