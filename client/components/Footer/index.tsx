import React, { FC } from 'react'
import ContainerMaxWidth from '../ContainerMaxWidth'
import ContainerWrapper from '../ContainerWrapper'
import SpacerHorizontal from '../sections/SpacerHorizontal'
import InstagramIcon from '../svg/InstagramIcon'
import TelegramIcon from '../svg/TelegramIcon'
import WhatsAppIcon from '../svg/WhatsAppIcon'

import styles from './footer.module.scss'

export const Footer: FC = () => {
	return (
		<>
			<SpacerHorizontal text={'questions'} />
			<ContainerMaxWidth Tag={'footer'}>
				<ContainerWrapper className={styles.footer__container}>
					<div className={styles.footer__contacts}>
						<div className={styles.footer__contacts_title}>Contacts</div>
						<div className={styles.footer__contacts_wrapper}>
							<p>
								Phone number: <br /> +1 (123)123-45-67
							</p>
							<p>Email: donuts@gmail.com</p>
							<p>Address: 324 Main St Carbondale, Pennsylvania(PA), 18407</p>
						</div>
					</div>
					<div
					// className={styles.footer__menu}
					>
						<div className={styles.footer__menu_title}>Menu</div>
						<div className={styles.footer__menu_wrapper}>
							<p className={styles.footer__menu_active}>About us</p>
							<p>Catalog</p>
							<p>Your bag</p>
							<p>Contacts</p>
						</div>
					</div>
					<div className={styles.footer__other}>
						<div
						// className={styles.footer__other__social}
						>
							<div className={styles.footer__other_title}>
								We are in social media
							</div>
							<div className={styles.footer__other_wrapper}>
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
						<div className={styles.footer__other__partners}>
							<div className={styles.footer__other_title}>Partners</div>
							<p>
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
