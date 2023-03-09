import { useRouter } from 'next/router'
import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'
import Donut from 'src/components/Donut/Donut'
import CircleIcon from 'src/components/svg/CircleIcon'

import styles from './catalogPreview.module.scss'

export const CatalogPreview: FC = () => {
	const router = useRouter()
	return (
		<ContainerMaxWidth className={styles.catalogPreview__container}>
			<ContainerWrapper className={styles.catalogPreview__wrapper}>
				<Donut />
				<Donut />
				<Donut />
				<Donut />
				<Donut />
				<Donut />
			</ContainerWrapper>
			<div
				className={styles.catalogPreview__button}
				onClick={() => {
					router.push('/catalog')
				}}
			>
				<p>all products</p>
				<CircleIcon />
			</div>
		</ContainerMaxWidth>
	)
}

export default CatalogPreview
