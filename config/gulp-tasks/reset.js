import { deleteAsync } from 'del'
export const reset = async () => {
	return await deleteAsync(app.path.clean)
}

// import { deleteAsync } from 'del'

// const deletedFilePaths = await deleteAsync(['temp/*.js', '!temp/unicorn.js'])
// const deletedDirectoryPaths = await deleteAsync(['temp', 'public'])

// console.log('Deleted files:\n', deletedFilePaths.join('\n'))
// console.log('\n\n')
// console.log('Deleted directories:\n', deletedDirectoryPaths.join('\n'))
