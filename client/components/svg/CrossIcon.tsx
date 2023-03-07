import React, { FC } from 'react'

const CrossIcon: FC = () => {
	return (
		<svg
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<line
				x1='0'
				y1='0'
				x2='16'
				y2='16'
				stroke='#FF7297'
				strokeLinecap='round'
				strokeWidth='0.5px'
			/>
			<line
				x1='16'
				y1='0'
				x2='0'
				y2='16'
				stroke='#FF7297'
				strokeLinecap='round'
				strokeWidth='0.5px'
			/>
		</svg>
	)
}

export default CrossIcon
