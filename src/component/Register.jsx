import "../style/Login.css"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, push, onValue } from '@firebase/database'
import { v4 } from 'uuid';
import _ from 'lodash'

const Register = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [email, setEmail] = useState()

    const navigate = useNavigate()

    const getUserData = async () => {
        const db = getDatabase()
        const starCountRef = ref(db, 'users/')
        onValue(starCountRef, async (snapshot) => {
            const data = await snapshot.val()
            console.log(data)
            return data
        })
    }

    const writeUserData = async () => {
        const data = await getUserData()
        const filtered = _.filter(data, (o) => { return o.username })
        console.log(data)
        if (_.isEmpty(filtered)) {
            // const db = getDatabase()
            // const reference = ref(db, 'users/')
            // push(reference, {
            //     username: username,
            //     password: password,
            //     email: email
            // })
        }

    }



    return (
        <>
            <div className="center">
                <h1 class="h3 mb-3 fw-normal">Registration</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setUsername(e.target.value)} />
                    <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(v4(e.target.value))} />
                    <label for="floatingPassword">Password</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={() => writeUserData()}>Register</button>
                <a href={""} onClick={() => navigate('/login')}>Already have an account?</a>
            </div>
        </>
    )
}

export default Register