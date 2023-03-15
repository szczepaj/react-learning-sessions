import {Outlet, useNavigate} from 'react-router-dom'
import css from "./Layout.module.css";
import {useDispatch} from "react-redux";
import {signOut} from "../../redux/auth/auth.thunk";
import {useAuth} from "../../hook/useAuth/useAuth";

export const Layout = () => {
    const { isAuthorized } = useAuth()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSignOut = () => dispatch(signOut())

  return (
      <main className={css.container}>
        <nav className={css.nav}>
            {!isAuthorized && (
                <>
                  <button onClick={() => navigate('sign-in')}>Sign in</button>
                  <button onClick={() => navigate('register')}>Register</button>
                </>
            )}
            {isAuthorized && <button onClick={handleSignOut}>Sign out</button>}
        </nav>
        <Outlet/>
      </main>
  )
};
