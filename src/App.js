import React from 'react'

import Submit from './component/Submit'
import './style/App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import LoginRegister from './pages/LoginRegister'
import StopWatch from './pages/StopWatch'
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
							<StopWatch />
							<Submit />
						</div>
					}
				/>
				<Route path="/login" element={<LoginRegister />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
