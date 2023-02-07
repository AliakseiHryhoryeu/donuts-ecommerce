import React, { FC } from 'react'
import stylesSkills from './skills.module.scss'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

export const Skills: FC = () => {
	const { theme } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
		}
	})

	return (
		<div
			className={`${stylesSkills[`skills_${theme}`]} ${stylesSkills.skills}`}
		>
			<div className={stylesSkills.skills__wrapper}>
				<div className={stylesSkills.skills__title}>Technical Skills</div>

				<h3 className={stylesSkills.skills__text}>
					<br />
					<span>Front-end:</span>
					TypeScript, JavaScript, HTML, CSS, React, Next.js, Redux, Redux
					Toolkit, GraphQL, Bootstrap, MaterialUI, Tailwind,
					<br />
					<span>Back-end:</span>
					Node.js, Express, Nest, RESTful API Development
					<br />
					<span>Databases:</span>
					MongoDB, PostgreSQL, MySQL
					<br />
					<span>Dev and Deployment Tools:</span>
					Git, Gulp, Webpack, Docker, AWS EC2
					<br />
				</h3>
			</div>
		</div>
	)
}
