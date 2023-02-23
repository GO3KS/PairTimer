import React from 'react'
import { Button } from '@mui/material'
import { useIsActive, useSetIsActive, useSetShow, useSetTime } from '../context/GlobalContext'
import '../style/StartStop.css'

const StartStop = () => {
	const isActive = useIsActive()
	const setIsActive = useSetIsActive()
	const setShow = useSetShow()
	const setTime = useSetTime()

	return (
		<div className="buttonContainer">
			<Button
				variant="contained"
				onClick={() => {
					setShow(true)
					setIsActive(false)
				}}
				className={'button'}
			>
				<span>Save</span>
			</Button>
			<Button variant="contained" onClick={() => setIsActive(!isActive)} className={'button'}>
				<span>{isActive ? "Stop" : "Start"}</span>
			</Button>
			<Button variant="contained" onClick={() => setTime(0)} className={'button'}>
				<span>Reset</span>
			</Button>
		</div>
	)
}

export default StartStop
