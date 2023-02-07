import React, { FC } from 'react'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import stylesProjects from './projects.module.scss'
import { RootState } from 'src/store'
import { ProjectCard } from './ProjectCard'

export const Projects: FC = () => {
	const { projects, theme } = useTypedSelector((state: RootState) => {
		return {
			projects: state.project.projects,
			theme: state.theme.theme,
		}
	})
	return (
		<div
			className={`${stylesProjects[`projects_${theme}`]} 
			${stylesProjects.projects}`}
		>
			<div className={stylesProjects.projects__wrapper}>
				<div className={stylesProjects.projects__title}>My Projects</div>

				<div className={stylesProjects.projects__items}>
					{projects.map(item => {
						return <ProjectCard key={item._id} {...item} />
					})}
				</div>
			</div>
		</div>
	)
}
