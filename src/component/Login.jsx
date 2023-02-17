import "../style/Login.css"
import React, { useState } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [cookies, setCookie] = useCookies()

    const [remember, setRemember] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const saveToCookies = () => {
        if (remember) {
            setCookie('username', username, { path: '/' });
            setCookie('password', password, { path: '/' });
        }
        console.log(cookies)
    }

    return (
        <>
            <div className="center">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label for="floatingPassword">Password</label>
                </div>

                <div class="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" onClick={() => setRemember(!remember)} /> Remember me
                    </label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={saveToCookies}>Sign in</button>
                <a href={""} onClick={() => navigate('/clock')}>register</a>
            </div>
        </>
    )
}

export default Login