import React, { FC } from 'react'

import styles from './description.module.scss'
import { ListIcon } from './ListIcon'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
// import { IProject, IProjectLinks } from 'src/store/project/project.types'

interface IProjectDescriptionProps {
	links: {
		website?: string | undefined
		github?: string | undefined
		figma?: string | undefined
		googlePlay?: string | undefined
		chromeExtension?: string | undefined
	}
	description: {
		text?: string | undefined
		frontend?: string[] | undefined
		backend?: string[] | undefined
		mobile?: string[] | undefined
		chromeExtension?: string[] | undefined
	}
}

export const Description: FC<IProjectDescriptionProps | undefined> = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		<div className={`${styles[`description_${theme}`]} ${styles.description}`}>
			<div className={styles.description__container}>
				<div className={`${styles.description__links}`}>
					{props?.links?.website && (
						<a
							title='Live Website'
							target='_blank'
							rel='noreferrer'
							href={props?.links?.website}
							className={styles.description__links__link}
						>
							Live Website
						</a>
					)}

					{props?.links?.github && (
						<a
							title='Live Website'
							target='_blank'
							rel='noreferrer'
							href={props?.links?.github}
							className={styles.description__links__link}
						>
							Github
						</a>
					)}
					{props?.links?.figma && (
						<a
							title='Live Website'
							target='_blank'
							rel='noreferrer'
							href={props?.links?.figma}
							className={styles.description__links__link}
						>
							Figma
						</a>
					)}
					{props?.links?.googlePlay && (
						<a
							title='Live Website'
							target='_blank'
							rel='noreferrer'
							href={props?.links?.googlePlay}
							className={styles.description__links__link}
						>
							Google play
						</a>
					)}
					{props?.links?.chromeExtension && (
						<a
							title='Live Website'
							target='_blank'
							rel='noreferrer'
							href={props?.links?.chromeExtension}
							className={styles.description__links__link}
						>
							Chrome Extension
						</a>
					)}
				</div>
				{props?.description.text && (
					<div className={`${styles.description__text}`}>
						{props?.description.text}
					</div>
				)}
				{props?.description.frontend && (
					<div className={`${styles.description__technologies}`}>
						<div className={`${styles.description__technologies__title}`}>
							Frontend
						</div>
						<ul>
							{props?.description.frontend.map(item => {
								return (
									<li
										className={`${styles.description__technologies__item}`}
										key={item}
									>
										<ListIcon />
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				)}
				{props?.description.backend && (
					<div className={`${styles.description__technologies}`}>
						<div className={`${styles.description__technologies__title}`}>
							Backend
						</div>
						<ul>
							{props?.description.backend.map(item => {
								return (
									<li
										className={`${styles.description__technologies__item}`}
										key={item}
									>
										<ListIcon />
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				)}
				{props?.description.mobile && (
					<div className={`${styles.description__technologies}`}>
						<div className={`${styles.description__technologies__title}`}>
							Mobile
						</div>
						<ul>
							{props?.description.mobile.map(item => {
								return (
									<li
										className={`${styles.description__technologies__item}`}
										key={item}
									>
										<ListIcon />
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				)}
				{props?.description.chromeExtension && (
					<div className={`${styles.description__technologies}`}>
						<div className={`${styles.description__technologies__title}`}>
							Chrome Extension
						</div>
						<ul>
							{props?.description.chromeExtension.map(item => {
								return (
									<li
										className={`${styles.description__technologies__item}`}
										key={item}
									>
										<ListIcon />
										{item}
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</div>
		</div>
	)
}
