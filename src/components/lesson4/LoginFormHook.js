import React from "react";
import { useForm } from "react-hook-form";


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


export const LoginFormHook = ({handleLogin}) => {
    const { register, handleSubmit } = useForm({
        defaultValues: initialState
    })

    return  (
        <>
            <form onSubmit={handleSubmit(handleLogin)} style={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center'}}>
                <label htmlFor={'login'}>Login</label>
                <input id={'login'} type="text" name="login" {...register('login')} />

                <label htmlFor="password">Password</label>
                <input id="password" type="password" {...register('password')} />

                <label htmlFor="email">Email</label>
                <input id="email" type="email" {...register('email')} />

                <label htmlFor="terms">Agree to terms & conditions</label>
                <input {...register('agreed')} id="terms" type="checkbox" />

                <div>
                    <h3>Choose your gender</h3>
                    <label htmlFor="radio-male">male</label>
                    <input id="radio-male" type="radio"  value={Gender.MALE} {...register('gender')}/>
                    <label htmlFor="radio-female">female</label>
                    <input id="radio-female" type="radio"  value={Gender.FEMALE} {...register('gender')} />
                </div>
                <label htmlFor="select-age">Choose your age</label>


                <select id="select-age" {...register('age')}>
                    <option value="" disabled>
                        ...
                    </option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36+">36+</option>
                </select>

                <button disabled={false} type="submit">Login</button>
            </form>
        </>
    )
}