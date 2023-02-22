import React, {useState} from 'react'
import {Link, useHistory, useNavigate, Navigate} from "react-router-dom";
import {loginApi} from "./loginApi";

// TODO: history object lookup

export const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isAuthorized, setAuthorized] = useState(false)
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()
        const {success } = await loginApi.auth()
        setAuthorized(success)

        // if(success) {
        //     navigate('/profile', { replace: true })
        // }
    }

    if(isAuthorized) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={username} onChange={e => setUsername(e.target.value)} />
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' value={password} onChange={e => setPassword(e.target.value)} />
                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}