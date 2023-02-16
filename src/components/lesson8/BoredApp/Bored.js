import {MyActivities} from "./MyActivities";
import {BoredApp} from "./BoredApp";
import {BoredContext} from "./BoredContext";
import {useState} from "react";

// Korzystanie z contextu - tworzenie nowego contextu i przekazywanie zmiennych stanowych

export const Bored = () => {
    const [myActivities, setMyActivities] = useState([])
    const [isAuthorized, setAuthorizationStatus] = useState(false)
    const [user, setUser] = useState('')

    console.log(myActivities)
    return (
        <BoredContext.Provider value={{
            myActivities,
            setMyActivities,
            isAuthorized,
            setAuthorizationStatus,
            user,
            setUser
        }}>
            <BoredApp/>
            <MyActivities/>
        </BoredContext.Provider>
    )
}