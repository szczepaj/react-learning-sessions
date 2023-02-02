import React from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'

const initialState = {
    login: '',
    password: '',
    email: '',
    agreed: false,
    gender: null,
    age: '',
    errors: {
        login: null
    }
}

const Gender = {
    MALE: 'male',
    FEMALE: 'female'
}

export class LoginForm extends React.Component {

    state = {...initialState}

    loginInputId = nanoid()

    validateLogin = (value) => {
        const isValid = value.length >= 3 && value.length <= 15

        if(!isValid) {
            this.setState(state => ({
                errors: {
                    ...state.errors,
                    login: true
                }
            }))
        } else {
            this.setState(state => ({
                errors: {
                    ...state.errors,
                    login: false
                }
            }))
        }
    }

    handleSubmit = (evt) => {
        evt.preventDefault()


        this.props.handleSubmit({...this.state})
        this.reset()
    }

    handleChange = (evt) => {
        const { value, name, checked, type } = evt.target

        if(name === 'login') {
            this.validateLogin(value)
        }

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    reset = () => {
        this.setState({...initialState})
    }


    render() {
        const { login, password, email, agreed, gender, age, errors } = this.state

        return (
            <>
                <h2>Welcome {this.state.login}</h2>
                <form onSubmit={this.handleSubmit} style={{display: 'flex', flexDirection: 'column', width: '50%', alignItems: 'center'}}>
                    <label htmlFor={this.loginInputId}>Login</label>
                    <input id={this.loginInputId} onChange={this.handleChange} type="text" name="login" value={login} />
                    {errors.login && <span style={{color: 'red'}}>Input niepoprawny</span>}

                    <label htmlFor="password">Password</label>
                    <input id="password" onChange={this.handleChange} type="password" name="password" value={password}/>

                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={this.handleChange} type="email" name="email" value={email} />

                    <label htmlFor="terms">Agree to terms & conditions</label>
                    <input name="agreed" onChange={this.handleChange} checked={agreed} id="terms" type="checkbox" />

                    <div>
                        <h3>Choose your gender</h3>
                        <label htmlFor="radio-male">male</label>
                        <input id="radio-male" type="radio" checked={gender === Gender.MALE} name="gender" value={Gender.MALE} onChange={this.handleChange}/>
                        <label htmlFor="radio-female">female</label>
                        <input id="radio-female" type="radio" checked={gender === Gender.FEMALE} name="gender" value={Gender.FEMALE} onChange={this.handleChange}/>
                    </div>
                    <label htmlFor="select-age">Choose your age</label>


                    <select name="age" value={age} id="select-age" onChange={this.handleChange}>
                        <option value="" disabled>
                            ...
                        </option>
                        <option value="18-25">18-25</option>
                        <option value="26-35">26-35</option>
                        <option value="36+">36+</option>
                    </select>

                    <button disabled={!agreed} type="submit">Login</button>
                </form>
            </>
        )
    }
}

LoginForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired
}