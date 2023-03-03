import React, { FC } from 'react'
import Head from 'next/head'

import styles from '../styles/main.module.scss'
import MainPreview from 'src/components/sections/MainPreview'
import SpacerText from 'src/components/sections/SpacerText'
import SpacerHorizontal from 'src/components/sections/SpacerHorizontal'
import AboutTeam from 'src/components/sections/AboutTeam'
import { Collect } from 'src/components/sections/Collect'
import Best from 'src/components/sections/Best'
import Donuts from 'src/components/sections/Donuts'

const Home: FC = () => (
	<>
		<Head>
			<title>Donuts</title>
		</Head>
		<main className={styles.main}>
			<MainPreview />
			<SpacerText />
			<SpacerHorizontal text={'our team'} />
			<AboutTeam />
			<SpacerHorizontal text={'donuts'} />
			<Donuts />
			<Collect />
			<Best />
		</main>
	</>
)

export default Home
