import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

import styles from './header.module.scss'

export const HeaderNavigation: FC = () => {
	const { headerPopup } = useTypedSelector((state: RootState) => {
		return {
			bagPopup: state.popups.bagPopup,
			headerPopup: state.popups.headerPopup,
			questionsPopup: state.popups.questionsPopup
		}
	})
	const { pathname } = useRouter()
	const router = useRouter()
	const allActions = useActions()

	return (
		<nav
			className={`${styles.header__nav__container} ${
				headerPopup ? styles.headerActive__nav__container : undefined
			}`}
		>
			<div
				onClick={() => {
					allActions.closeHeaderPopup()
					router.push('/')
				}}
				className={`${styles.header__nav__item} ${
					pathname === '/' ? styles.header__nav__item__active : undefined
				}`}
			>
				About us
			</div>
			<div
				onClick={() => {
					allActions.closeHeaderPopup()
					router.push('/catalog')
				}}
				className={`${
					pathname === '/catalog' ? styles.header__nav__item__active : undefined
				} ${styles.header__nav__item}`}
			>
				Catalog
			</div>
			<div
				onClick={() => {
					allActions.closeHeaderPopup()
					router.push('/bag')
				}}
				className={` ${styles.header__nav__item} ${styles.header__nav__bag} ${
					pathname === '/bag' ? styles.header__nav__item__active : undefined
				} `}
			>
				Bag
				<div className={styles.header__nav__bag__counter}>3</div>
			</div>
			<div
				onClick={() => {
					allActions.closeHeaderPopup()
					router.push('/contacts')
				}}
				className={`${styles.header__nav__item} ${
					pathname === '/contacts'
						? styles.header__nav__item__active
						: undefined
				} `}
			>
				Contacts
			</div>
		</nav>
	)
}

export default HeaderNavigation
