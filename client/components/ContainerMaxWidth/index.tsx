import React, { FC, ReactNode } from 'react'

import styles from './containerMaxWidth.module.scss'

interface IContainerProps {
	children: ReactNode
	// keyof JSX.IntrinsicElements - this is `div`, `footer`, `section`, `header`, and other normal HTML blocks names'
	Tag?: keyof JSX.IntrinsicElements
	// styles
	className?: string
}

export const ContainerMaxWidth: FC<IContainerProps> = ({
	children,
	Tag,
	className
}) => {
	return (
		<>
			{!Tag && (
				<section className={`${styles.containerMaxWidth} ${className}`}>
					{children}
				</section>
			)}
			{Tag && (
				<Tag className={`${styles.containerMaxWidth} ${className}`}>
					{children}
				</Tag>
			)}
		</>
	)
}

export default ContainerMaxWidth
