import React, { useEffect } from 'react'
import '../style/Stopwatch.css'
import { useIsActive, useSetTime, useTime } from '../context/GlobalContext'
import StartStop from '../component/StartStop'
import ToolbarWrapper from '../component/ToolbarWrapper'
import { Grid } from '@mui/material'

const Stopwatch = () => {
	const time = useTime()
	const setTime = useSetTime()
	const isActive = useIsActive()

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
		<ToolbarWrapper title="Stopwatch">
			<Grid container style={{ marginTop: 30 + 'vh' }} direction="column" alignItems="center" justifyContent="center">
				<Grid item xs={12}>
					<h1>
						<span>{('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
						<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
						<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
						<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
					</h1>
				</Grid>
				<Grid item xs={12} justifyContent="center">
					<StartStop />
				</Grid>
			</Grid>
		</ToolbarWrapper>
	)
}

export default Stopwatch
