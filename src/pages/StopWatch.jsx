import React, { useEffect } from 'react'
import '../style/StopWatch.css'
import { useIsActive, useSetTime, useTime } from '../context/GlobalContext'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from 'react-bootstrap'
import { Box } from '@mui/system'
import StartStop from '../component/StartStop'

const StopWatch = () => {
	const time = useTime()
	const setTime = useSetTime()
	const isActive = useIsActive()
	const theme = createTheme()

	useEffect(() => {
		let interval = null
		if (isActive) {
			interval = setInterval(() => {
				setTime((time) => time + 10)
			}, 10)
		} else {
			clearInterval(interval)
		}
		return () => {
			clearInterval(interval)
		}
	}, [isActive])

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							Stopwatch
						</Typography>
						<Button color="inherit">Logout</Button>
					</Toolbar>
				</AppBar>
			</Box>
			<div className="container">
				<h1>
					<span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
					<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
					<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
					<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
					<StartStop />
				</h1>
			</div>
		</ThemeProvider>
	)
}

export default StopWatch
