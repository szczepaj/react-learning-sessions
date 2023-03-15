import  { Navigate } from 'react-router-dom'
import {useAuth} from "../hook/useAuth/useAuth";

export const ProtectedRoute = ({component, redirectTo = '/'}) => {
    const { isAuthorized, isRefreshing } = useAuth()
    const shouldRedirect = isAuthorized && !isRefreshing

    return shouldRedirect ? component : <Navigate to={redirectTo} />
}