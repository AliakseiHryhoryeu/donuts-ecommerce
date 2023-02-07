import { FC, ReactNode } from 'react'

import { Footer, Header } from 'src/components/'

type layoutProps = {
	children: ReactNode
}

export const Layout: FC<layoutProps> = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
)
