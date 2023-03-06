import React, { FC } from 'react'
// import { useRouter } from 'next/router'
import Head from 'next/head'
import { useFormik } from 'formik'

import { passResetSchema } from '../components/validation/PassResetValidation'
// import { useTypedSelector } from 'src/hooks/useTypedSelector'
// import { RootState } from '../store'

import styles from '../styles/passreset.module.scss'

const PassResetPage: FC = () => {
	// const router = useRouter()
	// const { isAuth } = useTypedSelector((state: RootState) => {
	// 	return {
	// 		isAuth: state.user.isAuth
	// 	}
	// })

	const formik = useFormik({
		initialValues: {
			email: ''
		},
		validationSchema: passResetSchema,
		// onSubmit: (values) => {
		// 	// will be send mail to email
		// }
		onSubmit: (values) => {
			// will be send mail to email
		}
	})
	// useEffect(() => {
	// 	if (isAuth === true) {
	// 		router.push('/')
	// 	}
	// }, [])

	return (
		<>
			<Head>
				<title>DOUGHNUTS - Password Reset</title>
			</Head>
			<div className={styles.passReset}>
				<div className={styles.passReset__header}>
					<a href='/'>DOUGHNUTS</a>
				</div>
				<div className={styles.passReset__title}>Password Reset</div>
				<div className={styles.passReset__subtitle}>
					Enter your <b>DOUGHNUTS username</b> or the <b> email address</b>
					that you used to register. We &apos ll send you an email with your
					username and a link to reset your password.
				</div>
				<div className={styles.passReset__wrapper}>
					<form
						className={styles.passReset__form}
						onSubmit={formik.handleSubmit}
						noValidate
					>
						<div className={styles.passReset__form_wrapper}>
							<div className={styles.passReset__form_title}>
								Email address or username
							</div>
							{formik?.errors && (
								<div className={styles.passReset__form_title_error}>
									{formik?.errors.email}
								</div>
							)}
							<input
								className={styles.passReset__form_input}
								placeholder='Email address or username.'
								name='email'
								type='text'
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								value={formik.values.email}
							/>
						</div>
						<button
							type='button'
							onClick={() => {
								formik.handleSubmit()
							}}
							className={styles.passReset__form_button_passReset}
						>
							Send
						</button>
						<div className={styles.passReset__help__title}>
							If you still need help, contact
							<a href='/support'>DOUGHNUTS Support</a>.
						</div>
					</form>
				</div>
			</div>
		</>
	)
}

export default PassResetPage
