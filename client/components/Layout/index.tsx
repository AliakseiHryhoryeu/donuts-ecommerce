import { FC, ReactNode, useEffect } from 'react'
import { useActions } from 'src/hooks/useActions'
import { useAuthMutation } from 'src/store/user/user.api'
import Footer from '../Footer'
import Header from '../Header'

// import { Header } from 'src/components/'

interface ILayoutProps {
	children: ReactNode
}

export const Layout: FC<ILayoutProps> = ({ children }) => {
	const [authRequest, { isLoading: isLoading }] = useAuthMutation()

	const allActions = useActions()
	useEffect(() => {
		allActions.updateToken()
		authRequest({})
	}, [])

	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
