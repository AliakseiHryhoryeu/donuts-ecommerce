import React, { FC } from 'react'
import Donut from 'src/components/Donut'
import CrossIcon from '../../svg/CrossIcon'

import styles from './clearFilters.module.scss'

export const ClearFilters: FC = () => {
	return (
		<div className={styles.clearFilters__wrapper}>
			<p>Clear the filter</p>
			<CrossIcon />
		</div>
	)
}

export default ClearFilters
