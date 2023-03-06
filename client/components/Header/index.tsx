import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { useActions } from 'src/hooks/useActions'
import DonutIcon from '../svg/DonutIcon'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'
import BagIcon from './BagIcon'
// import PopupIcon from '../../svg/PopupIcon'

import styles from './header.module.scss'

export const Header: FC = () => {
	const { pathname } = useRouter()
	const router = useRouter()
	const allActions = useActions()

	return (
		<div className={`${styles.header}`}>
			<div className={styles.header__container}>
				<div className={` ${styles.icon_menu}`}>
					<span></span>
				</div>

				<div
					className={styles.header__logo}
					onClick={() => {
						router.push('/')
					}}
				>
					<DonutIcon />
					Doughnuts
				</div>
				<nav className={styles.header__nav}>
					<ul>
						<li
							className={
								pathname === '/' ? styles.header__nav_active : undefined
							}
						>
							<Link href='/'>About us</Link>
						</li>
						<li
							className={
								pathname === '/catalog' ? styles.header__nav_active : undefined
							}
						>
							<Link href='/catalog'>Catalog</Link>
						</li>
						<li
							className={`
							${pathname === '/bag' ? styles.header__nav_active : undefined} 							
							${styles.header__nav_bag}`}
							onClick={() => {
								allActions.toggleBagPopup()
							}}
						>
							<p>Bag</p>

							<BagIcon BagItemsCounter={'3'} />
						</li>
						<li
							className={
								pathname === '/contacts' ? styles.header__nav_active : undefined
							}
						>
							<Link href='/contacts'>Contacts</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.header__contacts}>
					<ul>
						<li>+1 (111) 123-11-22</li>
						<li className={styles.header__contacts__social}>
							<a href='https://www.instagram.com/'>
								<InstagramIcon />
							</a>
						</li>
						<li className={styles.header__contacts__social}>
							<a href='https://telegram.org/'>
								<TelegramIcon />
							</a>
						</li>
						<li className={styles.header__contacts__social}>
							<a href='https://www.whatsapp.com/'>
								<WhatsAppIcon />
							</a>
						</li>
					</ul>
				</div>
				{/* ${styles.header__burger} */}
			</div>
		</div>
	)
}

export default Header
