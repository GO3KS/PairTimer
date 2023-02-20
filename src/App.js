import React from 'react'
import Clock from './component/Clock'
import StartStop from './component/StartStop'
import Submit from './component/Submit'
import './style/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './component/Login'
import { useCookies } from 'react-cookie'
import Dashboard from './component/Dashboard'
import Register from './component/Register'
const App = () => {
	const [cookies, setCookie] = useCookies()
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={cookies.username === undefined ? <Navigate to="/login" /> : <Navigate to="/clock" />} />
				<Route
					path="/clock"
					element={
						<div>
							<Clock />
							<StartStop />
							<Submit />
						</div>
					}
				/>
				<Route
					path="/dashboard"
					element={
						<div>
							<Dashboard />
						</div>
					}
				/>
				<Route path="/login" element={<Login />} />
				<Route path='register' element={<Register />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
