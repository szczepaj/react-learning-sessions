import { loginAction, loginActionFulfilled, loginActionRejected } from 'actions'

const serverErrorMessage = {
    'wrong-login': null,
    'wrong-password': null,
    'captcha-error': null,
    'missing-verification': null,
    'account-inactive': null
}

const handleSignInPageLogin = async (dispatch, email, password) => {
    dispatch(loginAction())
    try {
        const response = await axios.post('/sign-in', {})
        dispatch(loginActionFulfilled(response))
    } catch (e) {
        const message = serverErrorMessage[e.message]
        if(e.message === 'captcha-error') {
            navigate('/')
            analytics('captcha')
            return
        }
        dispatch(loginActionRejected(message))
    }
}

const SignInAllegroComponent = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleLogin = () => handleSignInPageLogin(dispatch, email, password)

    const handleLogin = () => dispatch(handleLoginThunk(email, password))

    return (
        /** ..JSX code.. **/
    )
}