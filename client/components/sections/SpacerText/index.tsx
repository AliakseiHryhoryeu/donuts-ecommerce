import React, { FC } from 'react'
import ContainerMaxWidth from 'src/components/ContainerMaxWidth'
import ContainerWrapper from 'src/components/ContainerWrapper'

import styles from './arrange.module.scss'

export const SpacerText: FC = () => {
	return (
		<ContainerMaxWidth>
			<ContainerWrapper className={styles.arrange__container}>
				<p>
					Arrange a <span>sweet life</span>
					<br />
					for yourself
				</p>
			</ContainerWrapper>
		</ContainerMaxWidth>
	)
}

export default SpacerText
