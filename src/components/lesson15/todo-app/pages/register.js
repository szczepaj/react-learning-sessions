import {useDispatch} from "react-redux";
import { register } from '../redux/auth/auth.thunk'

export const Register = () => {

    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(register({
            name: form.elements.name.value,
            password: form.elements.password.value,
            email: form.elements.email.value
        }))
        form.reset();
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label>
                Username
                <input type="text" name="name" />
            </label>
            <label>
                Email
                <input type="email" name="email" />
            </label>
            <label>
                Password
                <input type="password" name="password" />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};