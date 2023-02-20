import "../style/Login.css"
import React, { useState } from "react"
import { useCookies } from 'react-cookie'
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, onValue, push } from '@firebase/database'
import _ from 'lodash'
import { v4 } from 'uuid';


const Login = () => {
    const [cookies, setCookie] = useCookies()

    const [remember, setRemember] = useState(false)
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const saveToCookies = () => {
        setCookie('username', username, { path: '/' });
        setCookie('password', password, { path: '/' });
    }

    const getUserData = async () => {
        navigate('/stopwatch')
        // const db = getDatabase()
        // const reference = ref(db, 'users/')
        // onValue(reference, async (snapshot) => {
        // const data = await snapshot.val()
        // let isValid = false
        // _.forEach(data, (o) => {
        //     if (o.username === username && o.password === v4(password)) {
        //         console.log(o)
        //         isValid = true
        //     }
        // })
        // console.log(isValid)
        // if (isValid) {
        //     if (remember) {
        //         saveToCookies()
        //     }

        // }

        // })
    }

    // const isFilled = () => {
    //     if (_.isEmpty(username)) {
    //         return false
    //     }
    //     if (_.isEmpty(password)) {
    //         return false
    //     }
    //     return true
    // }

    return (
        <>
            <div className="center">
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

                <div class="form-floating">
                    <input type="username" class="form-control" id="floatingInput" placeholder="username" onChange={(e) => setUsername(e.target.value)} />
                    <label for="floatingInput">Username</label>
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
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => getUserData()}>Sign in</button>
                <a href={""} onClick={() => navigate('/register')}>register</a>
            </div>
        </>
    )
}

export default Login