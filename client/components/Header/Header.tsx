import { useRouter } from 'next/router'
import React, { FC, useEffect } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { RootState } from 'src/store'

import HeaderNavigation from './HeaderNavigation'
import ContainerMaxWidth from '../ContainerMaxWidth'
import ContainerWrapper from '../ContainerWrapper'

import CrossIcon from '../svg/CrossIcon'
import DonutIcon from '../svg/DonutIcon'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'

import styles from './header.module.scss'

export const Header: FC = () => {
	const { headerPopup } = useTypedSelector((state: RootState) => {
		return {
			headerPopup: state.popups.headerPopup
		}
	})

	// Disable body scroll when headerPopup Active
	// useEffect(() => {
	// 	if (headerPopup) {
	// 		document?.body.classList.add(styles.scrollLock)
	// 	} else {
	// 		document?.body.classList.remove(styles.scrollLock)
	// 	}
	// }, [headerPopup])
	const router = useRouter()
	const allActions = useActions()
	return (
		<>
			<ContainerMaxWidth
				className={`${styles.header__container} ${
					headerPopup ? styles.headerActive__container : undefined
				}`}
			>
				<ContainerWrapper
					className={`${styles.header__wrapper} ${
						headerPopup ? styles.headerActive__wrapper : undefined
					}`}
				>
					<div
						className={`${styles.header__logo__container} ${
							headerPopup ? styles.headerActive__logo__container : undefined
						}`}
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
						<div className={styles.header__nav__NotActiveHeaderBurger}>
							<HeaderNavigation />
						</div>
						<div
							className={`${styles.header__logo__close} ${
								headerPopup ? styles.headerActive__logo__close : undefined
							}`}
							onClick={() => {
								allActions.closeHeaderPopup()
							}}
						>
							<CrossIcon />
						</div>
					</div>
					<div
						className={`${styles.header__nav__ActiveHeaderBurger} ${
							headerPopup
								? styles.headerActive__nav__ActiveHeaderBurger
								: undefined
						}`}
					>
						<HeaderNavigation />
					</div>
					<div
						className={`${styles.header__contacts__container} ${
							headerPopup ? styles.headerActive__contacts__container : undefined
						}`}
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
						className={`${styles.header__burger__container} ${
							headerPopup ? styles.headerActive__burger__container : undefined
						}`}
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
