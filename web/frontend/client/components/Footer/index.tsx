import React from 'react'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import styles from './footer.module.scss'

export const Footer = () => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})
	const resumeLink = 'https://github.com/AliakseiHryhoryeu/resume-app'
	return (
		<footer className={`${styles[`footer_${theme}`]} ${styles.footer}`}>
			<div className={`${styles.footer__description}`}>
				This Website running on <span>AWS EC2</span>, using <span>NGINX</span>,{' '}
				<span>PM2</span>, <span>Next.js</span>, <span>Redux Toolkit</span>,{' '}
				<span>Canvas</span>, <span>TypeScript</span>
			</div>
			<br />
			{/* <div className={`${styles.footer__source}`}>
				<div className={`${styles.footer__source_title}`}> Source code:</div>
				<a href={resumeLink} className={`${styles.footer__source_link}`}>
					{resumeLink}
				</a>
			</div> */}
		</footer>
	)
}
