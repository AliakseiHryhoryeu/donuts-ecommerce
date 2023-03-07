import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'
import ContainerMaxWidth from '../ContainerMaxWidth'
import ContainerWrapper from '../ContainerWrapper'
import CrossIcon from '../svg/CrossIcon'
import DonutIcon from '../svg/DonutIcon'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'
// import PopupIcon from '../../svg/PopupIcon'

import styles from './header.module.scss'

export const Header: FC = () => {
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
		<>
			<ContainerMaxWidth
				className={`${styles.header__container} 
				${headerPopup ? styles.headerActive__container : undefined}
				`}
			>
				<ContainerWrapper
					className={`${styles.header__wrapper} 				
					${headerPopup ? styles.headerActive__wrapper : undefined}
					`}
				>
					<div
						className={`${styles.header__logo__container} 					
						${headerPopup ? styles.headerActive__logo__container : undefined}
						`}
					>
						<div
							className={styles.header__logo}
							onClick={() => {
								router.push('/')
								allActions.closeHeaderPopup()
							}}
						>
							<DonutIcon />
							<span>Doughnuts</span>
						</div>
						<div
							className={`${styles.header__logo__close} 
							${headerPopup ? styles.headerActive__logo__close : undefined}
							`}
							onClick={() => {
								allActions.closeHeaderPopup()
							}}
						>
							<CrossIcon />
						</div>
					</div>

					<nav
						className={`${styles.header__nav__container} 						
						${headerPopup ? styles.headerActive__nav__container : undefined}
						`}
					>
						<div
							onClick={() => {
								allActions.closeHeaderPopup()
								router.push('/')
							}}
							className={`
							${styles.header__nav__item}
							${pathname === '/' ? styles.header__nav__item__active : undefined}
							`}
						>
							About us
						</div>
						<div
							onClick={() => {
								allActions.closeHeaderPopup()
								router.push('/catalog')
							}}
							className={`
							${pathname === '/catalog' ? styles.header__nav__item__active : undefined}
							${styles.header__nav__item}
							`}
						>
							Catalog
						</div>
						<div
							onClick={() => {
								allActions.closeHeaderPopup()
								router.push('/bag')
							}}
							className={`
							${styles.header__nav__item}
							${styles.header__nav__bag}
							${pathname === '/bag' ? styles.header__nav__item__active : undefined}
							`}
						>
							Bag
							<div className={styles.header__nav__bag__counter}>3</div>
						</div>
						<div
							onClick={() => {
								allActions.closeHeaderPopup()
								router.push('/contacts')
							}}
							className={`
							${styles.header__nav__item}
							${pathname === '/contacts' ? styles.header__nav__item__active : undefined}
							`}
						>
							Contacts
						</div>
					</nav>
					<div
						className={`${styles.header__contacts__container}
						${headerPopup ? styles.headerActive__contacts__container : undefined}
						`}
					>
						<div className={styles.header__contacts__phone}>
							<a href='tel:+11111231122'> +1 (111) 123-11-22</a>
						</div>
						<div className={styles.header__contacts__socials}>
							<a href='https://telegram.org/'>
								<TelegramIcon />
							</a>
							<a href='https://www.whatsapp.com/'>
								<WhatsAppIcon />
							</a>
							<a href='https://www.instagram.com/'>
								<InstagramIcon />
							</a>
						</div>
					</div>
					<div
						className={`${styles.header__burger__container} 						
						${headerPopup ? styles.headerActive__burger__container : undefined}
`}
						onClick={() => allActions.toggleHeaderPopup()}
					>
						<div className={styles.header__burger}>
							<span></span>
						</div>
					</div>
				</ContainerWrapper>
			</ContainerMaxWidth>
			<div style={{ marginBottom: '70px' }}></div>
		</>
	)
}

export default Header
