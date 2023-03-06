import React, { FC } from 'react'
import Head from 'next/head'

import GiftboxSection from 'src/components/sections/Gifbox/Gifbox'

import styles from '../styles/main.module.scss'

const GiftboxPage: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<GiftboxSection />
		</main>
	</>
)

export default GiftboxPage
