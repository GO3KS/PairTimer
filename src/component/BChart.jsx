import React, { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import { db } from '../config/connection'
const BChart = () => {
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
			<BarChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
				barSize={20}
			>
				<XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
				<YAxis />
				<Tooltip />
				<Legend />
				<CartesianGrid strokeDasharray="3 3" />
				<Bar dataKey="value" fill="#8884d8" background={{ fill: '#eee' }} />
			</BarChart>
		</ResponsiveContainer>
	)
}

export default BChart
