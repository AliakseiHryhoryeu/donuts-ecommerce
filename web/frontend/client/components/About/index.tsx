import React, { FC } from 'react'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

import stylesAbout from './about.module.scss'

export const About: FC = () => {
	// const { resumePdf, resumeDocx, theme } = useTypedSelector(
	// 	(state: RootState) => {
	// 		return {
	// 			resumePdf: state.about.resumePdf,
	// 			resumeDocx: state.about.resumeDocx,
	// 			theme: state.theme.theme,
	// 		}
	// 	}
	// )
	// <div className={`${stylesAbout[`about_${theme}`]} ${stylesAbout.about}`}>
	// ;<a
	// 	href='mailto:aliaksei.hryhoryeu.1@gmail.com'
	// 	className={stylesAbout.about__link}
	// 	title='Email'
	// >
	// 	aliaksei.hryhoryeu.1@gmail.com
	// </a>

	return <div className=''></div>
}
