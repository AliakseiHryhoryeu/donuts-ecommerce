import { FC } from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { About, Skills, Projects, Footer } from 'src/components'

const Home: FC = () => {
	return (
		<>
			<Head>
				<title>Aliaksei Hryhoryeu - Resume</title>
			</Head>
			<About />
			<Skills />
			<Projects />
			<Footer />
		</>
	)
}

export default Home
