import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const FailedSnackbarAlert = (props) => {
	const { openSnackbarAlert, setOpenSnackbarAlert } = { ...props }
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		setOpenSnackbarAlert({ open: false, message: '' })
	}

	return (
		<Snackbar open={openSnackbarAlert.open} autoHideDuration={5000} onClose={handleClose}>
			<Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
				{openSnackbarAlert.message}
			</Alert>
		</Snackbar>
	)
}

export default FailedSnackbarAlert
