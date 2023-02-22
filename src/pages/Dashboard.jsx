import React from 'react'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Chart from '../component/Chart'
import ToolbarWrapper from '../component/ToolbarWrapper'

const Dashboard = () => {
	return (
		<ToolbarWrapper>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8} lg={9}>
					<Paper
						sx={{
							p: 2,
							display: 'flex',
							flexDirection: 'column',
							height: 240,
						}}
					>
						<Chart />
					</Paper>
				</Grid>
			</Grid>
		</ToolbarWrapper>
	)
}

export default Dashboard
