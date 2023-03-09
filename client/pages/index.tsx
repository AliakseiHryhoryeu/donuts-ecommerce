import React, { FC } from 'react'
import Head from 'next/head'

import styles from '../styles/main.module.scss'
import MainPreview from 'src/components/sections/MainPreview/MainPreview'
import SpacerHorizontal from 'src/components/sections/SpacerHorizontal'
import AboutTeam from 'src/components/sections/AboutTeam/AboutTeam'
import GiftboxPreview from 'src/components/sections/GiftboxPreview/GiftboxPreview'
import Best from 'src/components/sections/Best/Best'
import CatalogPreview from 'src/components/sections/CatalogPreview/CatalogPreview'

const Home: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<MainPreview />
			<SpacerHorizontal text={'our team'} />
			<AboutTeam />
			<SpacerHorizontal text={'donuts'} />
			<CatalogPreview />
			<GiftboxPreview />
			<Best />
		</main>
	</>
)

export default Home
