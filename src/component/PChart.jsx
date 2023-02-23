import React, { PureComponent, useEffect, useState } from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/connection'
import _ from 'lodash'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)
	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

const PChart = () => {
	const [data, setData] = useState([
		{ name: 'Group A', value: 400 },
		{ name: 'Group B', value: 300 },
		{ name: 'Group C', value: 300 },
		{ name: 'Group D', value: 200 },
	])

	const getData = async () => {
		const docRef = collection(db, 'times')
		const docSnap = await getDocs(docRef)
		return docSnap
	}

	useEffect(async () => {
		const res = await getData()
		const newData = []
		res.forEach((doc) => {
			let isFound = false
			let foundIndex = 0
			newData.forEach((obj, index) => {
				if (obj.name === doc.data().participant) {
					isFound = true
					foundIndex = index
				}
			})
			if (isFound) {
				newData[foundIndex].value += doc.data().time
			} else {
				const newObj = {
					name: doc.data().participant,
					value: doc.data().time,
				}
				newData.push(newObj)
			}
		})
		setData(newData)
	}, [])

	return (
		<ResponsiveContainer width="100%" height="100%">
			<PieChart width={600} height={600}>
				<Pie data={data} cx="50%" cy="50%" labelLine={true} label outerRadius={175} fill="#8884d8" dataKey="value">
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
			</PieChart>
		</ResponsiveContainer>
	)
}

export default PChart
