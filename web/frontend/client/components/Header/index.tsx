import React, { FC, useEffect } from 'react'
import stylesHeader from './header.module.scss'
// import { ToggleTheme } from '../ToggleTheme'
import Link from 'next/link'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import { useRouter } from 'next/router'
import { useActions } from 'src/hooks/useActions'

export const Header: FC = () => {
	// const { resumePdf, theme } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		resumePdf: state.about.resumePdf,
	// 		theme: state.theme.theme,
	// 	}
	// })
	// const router = useRouter()

	// const allActions = useActions()

	// useEffect(() => {
	// 	allActions.getTheme({})
	// }, [])
	return (
		<>
			<header className=''></header>
		</>
	)
}
