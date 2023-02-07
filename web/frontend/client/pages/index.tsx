import { FC } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { About, Skills, Projects, Footer } from 'src/components'

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Donuts</title>
			</Head>
			<About />

			<Footer />
		</>
	)
}

export default Home
