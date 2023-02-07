import { FC } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { Project } from 'src/components'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import { projectsData } from 'src/store/project/data'
interface RouteParams {
	id: string
}
export const getServerSideProps: GetServerSideProps = async context => {
	if (!context.params) {
		return {
			notFound: true,
		}
	}
	return {
		props: context.params,
	}
}

const ProjectPage: FC<RouteParams> = props => {
	// const { projects, theme } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		projects: state.project.projects,
	// 		theme: state.theme.theme,
	// 	}
	// })

	let project = projectsData.filter(item => item._id === props.id)[0]

	return (
		<>
			<Head>
				<title>{project?.title ? project?.title : 'About project'}</title>
			</Head>
			<Project {...props} />
		</>
	)
}
export default ProjectPage
