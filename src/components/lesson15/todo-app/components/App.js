import { Layout } from "./Layout/Layout";
import { Routes, Route} from 'react-router-dom'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {Register} from "../pages/register";
import {SignIn} from "../pages/sign-in";
import {Todo} from "../pages/todo";
import {Home} from "../pages/home";
import {refreshUser} from "../redux/auth/auth.thunk";
import {useAuth} from "../hook/useAuth/useAuth";
import {ProtectedRoute} from "./ProtectedRoute";
import {RestrictedRoute} from "./RestrictedRoute";

export const TodoApp = () => {
    const dispatch = useDispatch()
    const { isRefreshing } = useAuth()

    useEffect(() => {
        dispatch(refreshUser())
    }, [dispatch])

  return isRefreshing ? <div>Loading</div> : (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route
                    path="/register"
                    element={<RestrictedRoute component={<Register/>} />}
                />
                <Route
                    path="/sign-in"
                    element={<RestrictedRoute component={<SignIn/>} />}
                />
                <Route
                    path="/todos"
                    element={<ProtectedRoute component={<Todo/>} redirectTo={'/sign-in'}/>}
                />
            </Route>
        </Routes>
  );
};
