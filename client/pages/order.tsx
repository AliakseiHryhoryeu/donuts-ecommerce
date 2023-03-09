import React, { FC } from 'react'
import Head from 'next/head'

import { Collect } from 'src/components/sections/GiftboxPreview/GiftboxPreview'

import styles from '../styles/main.module.scss'
import Catalog from 'src/components/sections/Catalog'

const OrderPage: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<Catalog />
			<Collect />
		</main>
	</>
)

export default OrderPage
