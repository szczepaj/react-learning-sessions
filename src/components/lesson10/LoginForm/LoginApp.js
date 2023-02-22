import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {WelcomePage} from "./WelcomePage";
import {LoginForm} from "./LoginForm";

export const LoginApp = () => {
    return (
        <Routes>
            <Route path='/login' element={<LoginForm />} />
            <Route path='/profile' element={<WelcomePage />} />
        </Routes>
    )
}