import React, { FC } from 'react'

import styles from './links.module.scss'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
// import { IProject, IProjectLinks } from 'src/store/project/project.types'

interface IProjectLinksProps {
	website?: string | undefined
	github?: string | undefined
	figma?: string | undefined
	googlePlay?: string | undefined
	chromeExtension?: string | undefined
}

export const Links: FC<IProjectLinksProps | undefined> = props => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		<div className={`${styles[`links_${theme}`]} ${styles.links}`}>
			<div className={styles.links__container}>
				{props?.website && (
					<>
						<div className={styles.links__title}>Live Website:</div>
						<a
							target='_blank'
							rel='noreferrer'
							href={props?.website}
							className={styles.links__link}
						>
							{props?.website}
						</a>
					</>
				)}
			</div>
			<div className={styles.links__container}>
				{props?.googlePlay && (
					<>
						<div className={styles.links__title}>Google Play:</div>
						<a
							target='_blank'
							rel='noreferrer'
							href={props?.googlePlay}
							className={styles.links__link}
						>
							{props?.googlePlay}
						</a>
					</>
				)}
			</div>
			<div className={styles.links__container}>
				{props?.chromeExtension && (
					<>
						<div className={styles.links__title}>Chrome Extension:</div>
						<a
							target='_blank'
							rel='noreferrer'
							href={props?.chromeExtension}
							className={styles.links__link}
						>
							{props?.chromeExtension}
						</a>
					</>
				)}
			</div>
			<div className={styles.links__container}>
				{props?.figma && (
					<>
						<div className={styles.links__title}>Figma:</div>
						<a
							target='_blank'
							rel='noreferrer'
							href={props?.figma}
							className={styles.links__link}
						>
							{props?.figma}
						</a>
					</>
				)}
			</div>
			<div className={styles.links__container}>
				<div className={styles.links__title}>Github:</div>
				<a
					target='_blank'
					rel='noreferrer'
					href={props?.github}
					className={styles.links__link}
				>
					{props?.github}
				</a>
			</div>
		</div>
	)
}
