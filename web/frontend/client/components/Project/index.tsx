import React, { FC } from 'react'
// import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { Slider } from './Slider'

import stylesProject from './project.module.scss'
import { Links } from './Links'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import { Description } from './Description'

interface IProjectProps {
	id: string
}

export const Project: FC<IProjectProps> = props => {
	const { projects, theme } = useTypedSelector((state: RootState) => {
		return {
			projects: state.project.projects,
			theme: state.theme.theme,
		}
	})

	let project = projects.filter(item => item._id === props.id)[0]

	const projectLinks = project?.links
	const projectDescription = project?.description
	const projectSlides = project?.slides
	const descriptionProps = {
		description: { ...projectDescription },
		links: {
			...projectLinks,
		},
	}
	return (
		<div
			className={`
			${stylesProject[`project_${theme}`]} 
			${stylesProject.project}
			`}
		>
			<div className={stylesProject.project__wrapper}>
				<div className={stylesProject.project__container}>
					<Slider props={projectSlides} />
					<div className={stylesProject.project__description__container}>
						<h2 className={stylesProject.project__title}>{project?.title}</h2>
						<div className={stylesProject.project__description}>
							<Description {...descriptionProps} />
						</div>
					</div>
				</div>
				<Links {...projectLinks} />
			</div>
		</div>
	)
}
