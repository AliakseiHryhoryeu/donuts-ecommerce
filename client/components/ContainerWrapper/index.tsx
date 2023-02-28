import React, { FC, ReactNode } from 'react'

import styles from './containerWrapper.module.scss'

interface IContainerProps {
	children: ReactNode
	// keyof JSX.IntrinsicElements - this is `div`, `footer`, `section`, `header`, and other normal HTML blocks names'
	ContainerTag?: keyof JSX.IntrinsicElements
	// styles
	className?: string
}

export const ContainerWrapper: FC<IContainerProps> = ({
	children,
	ContainerTag,
	className
}) => {
	return (
		<>
			{!ContainerTag && (
				<div className={`${className} ${styles.containerWrapper} `}>
					{children}
				</div>
			)}
			{ContainerTag && (
				<ContainerTag className={`${className} ${styles.containerWrapper}`}>
					{children}
				</ContainerTag>
			)}
		</>
	)
}

export default ContainerWrapper
