import React, { FC } from 'react'

const CrossIcon: FC = () => {
	return (
		<svg
			width='16'
			height='15'
			viewBox='0 0 16 15'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<line
				x1='0.5'
				y1='-0.5'
				x2='19.5'
				y2='-0.5'
				transform='matrix(0.707107 0.707107 -0.664285 0.747479 0.799408 0.534668)'
				stroke='#FF7297'
				strokeLinecap='round'
			/>
			<line
				x1='0.5'
				y1='-0.5'
				x2='19.5'
				y2='-0.5'
				transform='matrix(-0.707107 0.707107 0.664285 0.747479 15.7994 0.534668)'
				stroke='#FF7297'
				strokeLinecap='round'
			/>
		</svg>
	)
}

export default CrossIcon
