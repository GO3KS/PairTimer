import React, { useEffect } from 'react'
import '../style/StopWatch.css'
import { useIsActive, useSetTime, useTime } from '../context/GlobalContext'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from 'react-bootstrap'
import { Box } from '@mui/system'
import StartStop from '../component/StartStop'
import NavigationBar from '../component/NavigationBar'

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
			<NavigationBar />
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
