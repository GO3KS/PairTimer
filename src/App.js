import React from 'react'
import Clock from './component/Clock'
import StartStop from './component/StartStop'
import Submit from './component/Submit'
import './style/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './component/Login'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            <Clock />
                            <StartStop />
                            <Submit />
                        </div>
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
