import React, { FC } from 'react'
import Head from 'next/head'

import { GiftboxPreview } from 'src/components/sections/GiftboxPreview/GiftboxPreview'

import styles from '../styles/main.module.scss'
import Catalog from 'src/components/sections/Catalog'

const CatalogPage: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<Catalog />
			<GiftboxPreview />
		</main>
	</>
)

export default CatalogPage
