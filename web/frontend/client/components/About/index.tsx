import React, { FC } from 'react'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

import stylesAbout from './about.module.scss'

export const About: FC = () => {
	const { resumePdf, resumeDocx, theme } = useTypedSelector(
		(state: RootState) => {
			return {
				resumePdf: state.about.resumePdf,
				resumeDocx: state.about.resumeDocx,
				theme: state.theme.theme,
			}
		}
	)

	return (
		<div className={`${stylesAbout[`about_${theme}`]} ${stylesAbout.about}`}>
			<div className={stylesAbout.about__wrapper}>
				<h2 className={stylesAbout.about__subtitle}>
					Hi, I am
					<a
						href='https://github.com/AliakseiHryhoryeu'
						className={stylesAbout.about__subtitle_purple}
						title='GitHub'
					>
						Aliaksei Hryhoryeu
					</a>
					👋
				</h2>
				<h1 className={stylesAbout.about__title}>Frontend Developer</h1>
				<h3 className={stylesAbout.about__text}>
					<br />
					<span
						className={`${stylesAbout.about__text_mr7} ${stylesAbout.about__text}`}
					>
						WhatsApp, Viber, Telegram:
					</span>
					<span className={stylesAbout.about__text_fw400}>
						+375 (29) 243 37 59
					</span>
					<br />
					Email:
					<a
						href='mailto:aliaksei.hryhoryeu.1@gmail.com'
						className={stylesAbout.about__link}
						title='Email'
					>
						aliaksei.hryhoryeu.1@gmail.com
					</a>
					<br />
					Github:
					<a
						rel='noreferrer'
						className={stylesAbout.about__link}
						href='https://github.com/AliakseiHryhoryeu'
						target='_blank'
						title='Github'
					>
						https://github.com/AliakseiHryhoryeu
					</a>
					<br />
					Resume:
					<a
						rel='noreferrer'
						className={stylesAbout.about__link}
						href={resumeDocx}
						target='_blank'
						title='CV .docx'
					>
						.docx
					</a>
					<a
						rel='noreferrer'
						className={stylesAbout.about__link}
						href={resumePdf}
						target='_blank'
						title='CV .pdf'
					>
						.pdf
					</a>
				</h3>
			</div>
		</div>
	)
}
