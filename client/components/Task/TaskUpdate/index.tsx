import { useFormik } from 'formik'
import React, { FC } from 'react'

import { useUpdateTaskMutation } from 'src/store/tasks/tasks.api'
import { taskUpdateSchema } from 'src/components/validation/TaskUpdateValidation'
import { useTypedSelector } from 'src/hooks/useTypedSelector'
import { useActions } from 'src/hooks/useActions'
import { RootState } from 'src/store'

import styles from './TaskUpdate.module.scss'

type TaskUpdateProps = {
	taskid: string
}

export const TaskUpdate: FC<TaskUpdateProps> = ({ taskid }) => {
	const { theme, isActivePopup } = useTypedSelector((state: RootState) => {
		return {
			theme: state.theme.theme,
			isActivePopup: state.popups.taskUpdate,
		}
	})

	const [updateTaskRequest, { isLoading: isLoading }] = useUpdateTaskMutation()
	const allActions = useActions()

	const formik = useFormik({
		initialValues: {
			title: '',
			text: '',
		},
		validationSchema: taskUpdateSchema,
		onSubmit: values => {
			updateTaskRequest({
				taskid: taskid,
				title: values.title,
				text: values.text,
			})
		},
	})

	const clearFormik = () => {
		formik.values.title = ''
		formik.values.text = ''
	}
	return (
		<div className={`${styles[`taskUpdate__display_${isActivePopup}`]}`}>
			<div className={`${styles[`taskUpdate_${theme}`]} ${styles.taskUpdate}`}>
				<div className={styles.taskUpdate__wrapper}>
					<div className={styles.taskUpdate__wrapper_title}>Task title</div>
					{formik?.errors && (
						<div className={styles.taskUpdate__wrapper_error}>
							{formik?.errors.title}
						</div>
					)}
					<input
						className={`${styles.taskUpdate__input} ${styles.taskUpdate__title}`}
						type='text'
						placeholder='Enter your task title'
						name='title'
						value={formik.values.title}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div className={styles.taskUpdate__wrapper_title}>Task text</div>
					{formik?.errors && (
						<div className={styles.taskUpdate__wrapper_error}>
							{formik?.errors.text}
						</div>
					)}

					<textarea
						className={`${styles.taskUpdate__input} ${styles.taskUpdate__input__text}`}
						placeholder='Enter your task description'
						name='text'
						value={formik.values.text}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					<div className={styles.taskUpdate__buttons}>
						<div
							onClick={e => {
								clearFormik()
								allActions.toggleTaskUpdatePopup()
							}}
						>
							Cancel
						</div>
						<div
							onClick={() => {
								formik.handleSubmit()
							}}
						>
							Add
						</div>
					</div>
				</div>
			</div>
			<div
				className={styles.taskUpdate__bg}
				onClick={e => allActions.toggleTaskUpdatePopup()}
			></div>
		</div>
	)
}
