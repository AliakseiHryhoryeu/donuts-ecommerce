import { useRouter } from 'next/router'
import React, { FC } from 'react'
import ContainerMaxWidth from '../ContainerMaxWidth'
import ContainerWrapper from '../ContainerWrapper'
import SpacerHorizontal from '../sections/SpacerHorizontal'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'

import styles from './footer.module.scss'

export const Footer: FC = () => {
	const { pathname } = useRouter()
	const router = useRouter()

	return (
		<>
			<ContainerMaxWidth>
				<SpacerHorizontal text={'questions'} />
			</ContainerMaxWidth>
			<ContainerMaxWidth className={styles.footer__container} Tag={'footer'}>
				<ContainerWrapper className={styles.footer__wrapper}>
					<div className={styles.footer__wrapperMedia770}>
						<div className={styles.footer__contacts}>
							<div className={styles.footer__title}>Contacts</div>
							<div
								className={`${styles.footer__contacts_wrapper} ${styles.footer__text}`}
							>
								<p>
									Phone number: <br /> +1 (123)123-45-67
								</p>
								<p>Email: donuts@gmail.com</p>
								<p>Address: 324 Main St Carbondale, Pennsylvania(PA), 18407</p>
							</div>
						</div>
						<div className={styles.footer__menu__container}>
							<div className={styles.footer__menu_wrapper}>
								<div className={styles.footer__title}>Menu</div>
								<a
									href='/'
									className={`${styles.footer__text} ${
										pathname === '/'
											? styles.footer__text__active
											: styles.footer__text__hover
									}`}
								>
									About us
								</a>
								<a
									href='/catalog'
									className={`${styles.footer__text} ${
										pathname === '/catalog'
											? styles.footer__text__active
											: styles.footer__text__hover
									}`}
								>
									Catalog
								</a>
								<a
									href='/bag'
									className={`${styles.footer__text} ${
										pathname === '/bag'
											? styles.footer__text__active
											: styles.footer__text__hover
									}`}
								>
									Your bag
								</a>
								<a
									href='/contacts'
									className={`${styles.footer__text} ${
										pathname === '/contacts'
											? styles.footer__text__active
											: styles.footer__text__hover
									}`}
								>
									Contacts
								</a>
							</div>
							<div
								className={`${styles.footer__socials} ${styles.footer__socials__moblieOnly}`}
							>
								<div className={styles.footer__title}>
									We are in social media
								</div>
								<div className={styles.footer__socials_wrapperSvg}>
									<a href='https://www.instagram.com/'>
										<InstagramIcon />
									</a>
									<a href='https://telegram.org/'>
										<TelegramIcon />
									</a>
									<a href='https://www.whatsapp.com/'>
										<WhatsAppIcon />
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className={`${styles.footer__partners__container}`}>
						<div
							className={`${styles.footer__socials} ${styles.footer__socials__pcOnly}`}
						>
							<div className={styles.footer__title}>We are in social media</div>
							<div className={styles.footer__socials_wrapperSvg}>
								<a href='https://www.instagram.com/'>
									<InstagramIcon />
								</a>
								<a href='https://telegram.org/'>
									<TelegramIcon />
								</a>
								<a href='https://www.whatsapp.com/'>
									<WhatsAppIcon />
								</a>
							</div>
						</div>
						<div className={styles.footer__partners}>
							<div className={styles.footer__title}>Partners</div>
							<p
								className={`${styles.footer__text} ${styles.footer__text__hover}`}
							>
								Become a sponsor in one click on the program &quot;We are
								donuts&quot;
							</p>
						</div>
					</div>
				</ContainerWrapper>
			</ContainerMaxWidth>
		</>
	)
}

export default Footer
