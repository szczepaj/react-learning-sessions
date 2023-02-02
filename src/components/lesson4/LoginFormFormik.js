import React, { useState } from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';


const initialState = {
    login: '',
    password: '',
    email: '',
    agreed: false,
    gender: null,
    age: '',
}

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

const validate = values => {
    const errors = {}
    if(!values.login) {
        errors.login = 'Required login'
    } else if (values.login.length <= 3 && values.login.length >= 15) {
        errors.login = 'Wrong length of login'
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors
}

const validationSchema = Yup.object({
    login: Yup.string().max(15, 'Too long').min(3, 'Too short').required('Required'),
    email: Yup.string().email('Incorrect email address').required('Required')
})

export const LoginFormFormik = ({handleLogin}) => {
    const formik = useFormik({
        initialValues: initialState,
        // validate,
        validationSchema,
        onSubmit: values => {
            handleLogin(values)
        },
    });

    return  (
        <>
            <form onSubmit={formik.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center'}}>
                <label htmlFor={'login'}>Login</label>
                <input id={'login'} onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="login" value={formik.values.login} />
                {formik.touched.login && formik.errors.login && <span style={{color: 'red'}}>{formik.errors.login}</span>}

                <label htmlFor="password">Password</label>
                <input id="password" onChange={formik.handleChange} type="password" name="password" value={formik.values.password}/>

                <label htmlFor="email">Email</label>
                <input onBlur={formik.handleBlur} id="email" onChange={formik.handleChange} type="email" name="email" value={formik.values.email} />
                {formik.touched.email && formik.errors.email && <span style={{color: 'red'}}>{formik.errors.email}</span>}

                <label htmlFor="terms">Agree to terms & conditions</label>
                <input name="agreed" onChange={formik.handleChange} checked={formik.values.agreed} id="terms" type="checkbox" />

                <div>
                    <h3>Choose your gender</h3>
                    <label htmlFor="radio-male">male</label>
                    <input id="radio-male" type="radio" checked={formik.values.gender === Gender.MALE} name="gender" value={Gender.MALE} onChange={formik.handleChange}/>
                    <label htmlFor="radio-female">female</label>
                    <input id="radio-female" type="radio" checked={formik.values.gender === Gender.FEMALE} name="gender" value={Gender.FEMALE} onChange={formik.handleChange}/>
                </div>
                <label htmlFor="select-age">Choose your age</label>


                <select name="age" value={formik.values.age} id="select-age" onChange={formik.handleChange}>
                    <option value="" disabled>
                        ...
                    </option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36+">36+</option>
                </select>

                <button disabled={!formik.values.agreed} type="submit">Login</button>
            </form>
        </>
    )
}