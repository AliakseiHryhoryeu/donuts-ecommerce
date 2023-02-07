import React, { FC } from 'react'
import { IProject } from 'src/store/project/project.types'
import stylesProjects from '../projects.module.scss'
import { NewWindowIcon } from './NewWindowIcon'

export const ProjectCard: FC<IProject> = props => {
	return (
		<div className={stylesProjects.projects__item} key={props._id}>
			<a
				href={`projects/${props._id}`}
				rel='noreferrer'
				target='_blank'
				title='About project'
			>
				<img
					className={stylesProjects.projects__item_img}
					src={props.img}
					alt=''
				/>
			</a>
			<div className={stylesProjects.projects__item_wrapper}>
				<a
					target='_blank'
					rel='noreferrer'
					href={`projects/${props._id}`}
					className={stylesProjects.projects__item_title}
					title='About project'
				>
					{props.title}
				</a>
				<div className={stylesProjects.projects__item_text}>
					{props.previewText}
				</div>
				<div className={stylesProjects.projects__item__tags}>
					{props.tags.map(tag => {
						return (
							<div
								className={stylesProjects.projects__item__tags_tag}
								key={props._id + tag}
							>
								{tag}
							</div>
						)
					})}
				</div>
				<div className={stylesProjects.projects__item__buttons}>
					<a
						target='_blank'
						rel='noreferrer'
						href={props.button.url}
						className={stylesProjects.projects__item__buttons_primary}
					>
						{props.button.text}
					</a>

					<a
						target='_blank'
						rel='noreferrer'
						href={`projects/${props._id}`}
						className={stylesProjects.projects__item__buttons_secondary}
						title='About project'
					>
						About project
						<NewWindowIcon />
					</a>
				</div>
			</div>
		</div>
	)
}
