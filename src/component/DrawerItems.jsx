import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import BarChartIcon from '@mui/icons-material/BarChart'
import { useNavigate } from 'react-router'

const DrawerItems = () => {
	const navigate = useNavigate()

	return (
		<>
			<ListItemButton
				onClick={() => {
					navigate('/dashboard')
				}}
			>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItemButton>
			<ListItemButton
				onClick={() => {
					navigate('/stopwatch')
				}}
			>
				<ListItemIcon>
					<AccessAlarmIcon />
				</ListItemIcon>
				<ListItemText primary="Stopwatch" />
			</ListItemButton>
			<ListItemButton
				onClick={() => {
					navigate('/login')
				}}
			>
				<ListItemIcon>
					<BarChartIcon />
				</ListItemIcon>
				<ListItemText primary="Reports" />
			</ListItemButton>
		</>
	)
}

export default DrawerItems
