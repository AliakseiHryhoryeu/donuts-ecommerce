import React from 'react'
import Head from 'next/head'
// import Link from 'next/link'
import { Projects } from 'src/components'

const ProjectsPage = () => {
	return (
		<>
			<Head>
				<title>Projects</title>
			</Head>
			<Projects />
		</>
	)
}

export default ProjectsPage
