import React, { FC } from 'react'

import styles from './header.module.scss'

interface IBagIconProps {
	BagItemsCounter: string | undefined
}

export const BagIcon: FC<IBagIconProps> = (props) => {
	return (
		<div className={styles.header__nav_bag_counter}>
			{props?.BagItemsCounter}
		</div>
	)
}

export default BagIcon
