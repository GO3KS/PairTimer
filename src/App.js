import React from 'react'

import Submit from './component/Submit'
import './style/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LoginRegister from './pages/LoginRegister'
import Stopwatch from './pages/Stopwatch'
import Dashboard from './pages/Dashboard'
const App = () => {
	const [cookies, setCookie] = useCookies()
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" element={cookies.username === undefined ? <Navigate to="/login" /> : <Navigate to="/stopwatch" />} />
				<Route
					path="/stopwatch"
					element={
						<div>
							<Stopwatch />
							<Submit />
						</div>
					}
				/>
				<Route path="/login" element={<LoginRegister />} />
				<Route path="/dashboard" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
