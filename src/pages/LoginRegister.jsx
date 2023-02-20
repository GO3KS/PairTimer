import '../style/LoginRegister.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { db } from '../config/connection'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { AES, enc } from 'crypto-js'
import { v4 } from 'uuid'
import _ from 'lodash'
import { useCookies } from 'react-cookie'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import FailedSnackbarAlert from '../component/login_register/FailedSnackbarAlert'
import { isFilled } from '../util/isFilled'
import { useSetUserId } from '../context/GlobalContext'

const LoginRegister = () => {
	const [remember, setRemember] = useState(false)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [openSnackbarAlert, setOpenSnackbarAlert] = useState(false)
	const [cookies, setCookie] = useCookies()
	const theme = createTheme()
	const setUserId = useSetUserId()
	const navigate = useNavigate()

	const checkUserData = async () => {
		const usersRef = collection(db, 'users')
		const querySnapshot = await getDocs(usersRef)
		let isValid = true
		let docId
		let docEncryptedPassword
		querySnapshot.forEach((doc) => {
			if (username === doc.data().username) {
				isValid = false
				docId = doc.id
				docEncryptedPassword = doc.data().password
			}
		})
		if (isValid) {
			const secret = v4()
			const encryptedPassword = AES.encrypt(password, secret)
			const ref = await addDoc(collection(db, 'users'), { username: username, password: encryptedPassword.toString() })
			setUserId(ref.id)
			await addDoc(collection(db, 'secrets'), { user_id: ref.id, secret: secret })
			if (remember) {
				saveToCookies(encryptedPassword)
			}
			navigate('/stopwatch')
		} else if (!isValid) {
			const secretsRef = collection(db, 'secrets')
			const q = query(secretsRef, where('user_id', '==', docId))
			const querySnapshot = await getDocs(q)
			const secret = querySnapshot.docs[0].data().secret
			const decryptedPassword = AES.decrypt(docEncryptedPassword, secret).toString(enc.Utf8)

			if (decryptedPassword === password) {
				if (remember) {
					saveToCookies(docEncryptedPassword, docId)
				}
				navigate('/stopwatch')
			} else if (decryptedPassword !== password) {
				handleClick('Incorrect password!')
				return 0
			}
			handleClick('Username already in use!')
			return 0
		}
	}

	const saveToCookies = (password, userId) => {
		setCookie('username', username, { path: '/' })
		setCookie('password', password, { path: '/' })
		setCookie('userId', userId, { path: '/' })
	}

	const handleClick = (message) => {
		setOpenSnackbarAlert({ open: true, message: message })
	}

	return (
		<div>
			<div className="center">
				<ThemeProvider theme={theme}>
					<Container component="main" maxWidth="xs">
						<CssBaseline />
						<Box
							sx={{
								marginTop: 8,
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
							}}
						>
							<Typography component="h1" variant="h5">
								Sign in
							</Typography>
							<Box noValidate sx={{ mt: 1 }}>
								<TextField onChange={(e) => setUsername(e.target.value)} margin="normal" required fullWidth label="Username" autoFocus />
								<TextField onChange={(e) => setPassword(e.target.value)} margin="normal" required fullWidth label="Password" type="password" />
								<FormControlLabel control={<Checkbox value="remember" color="primary" onClick={() => setRemember(true)} />} label="Remember me" />
								<Button onClick={() => (isFilled(username, password) === true ? checkUserData() : null)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
									Sign In
								</Button>
							</Box>
						</Box>
					</Container>
				</ThemeProvider>
			</div>
			<FailedSnackbarAlert openSnackbarAlert={openSnackbarAlert} setOpenSnackbarAlert={setOpenSnackbarAlert} />
		</div>
	)
}

export default LoginRegister
