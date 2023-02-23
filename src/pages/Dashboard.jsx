import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import ToolbarWrapper from '../component/ToolbarWrapper'
import PChart from '../component/PChart'
import BChart from '../component/BChart'

const Dashboard = () => {
	return (
		<ToolbarWrapper title="Dashboard">
			<Grid container spacing={3}>
				<Grid item xs={8}>
					<h4>Breakdown of driving time spent on Demo project</h4>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 525,
							justifyContent: 'center',
						}}
					>
						<PChart />
					</Paper>
				</Grid>
				<Grid item xs={8}>
					<h4>Breakdown of driving time spent on Demo project</h4>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 525,
							justifyContent: 'center',
						}}
					>
						<BChart />
					</Paper>
				</Grid>
			</Grid>
		</ToolbarWrapper>
	)
}

export default Dashboard
