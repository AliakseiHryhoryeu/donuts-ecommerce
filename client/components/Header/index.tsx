import React, { FC } from 'react'
import DonutIcon from '../svg/DonutIcon'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'
import BagIcon from './BagIcon'
// import PopupIcon from '../../svg/PopupIcon'

import styles from './header.module.scss'

export const Header: FC = () => {
	return (
		<div className={`${styles.header}`}>
			<div className={styles.header__container}>
				<div className={` ${styles.icon_menu}`}>
					<span></span>
				</div>

				<div className={styles.header__logo}>
					<DonutIcon />
					Doughnuts
				</div>
				<nav className={styles.header__nav}>
					<ul>
						<li>About us</li>
						<li className={styles.header__nav_active}>Catalog</li>
						<li className={styles.header__nav_bag}>
							<p>Bag</p>
							<BagIcon BagItemsCounter={'3'} />
						</li>
						<li>Contacts</li>
					</ul>
				</nav>
				<div className={styles.header__contacts}>
					<ul>
						<li>+1 (111) 123-11-22</li>
						<li className={styles.header__contacts__social}>
							<InstagramIcon />
						</li>
						<li className={styles.header__contacts__social}>
							<TelegramIcon />
						</li>
						<li className={styles.header__contacts__social}>
							<WhatsAppIcon />
						</li>
					</ul>
				</div>
				{/* ${styles.header__burger} */}
			</div>
		</div>
	)
}

export default Header
