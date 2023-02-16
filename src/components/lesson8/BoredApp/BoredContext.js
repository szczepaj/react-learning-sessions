import {createContext, useContext} from 'react'

// Inicjalizacja kontekstu

const initialState = {
    myActivities: [],
    user: '',
    isAuthorized: false
}

export const BoredContext = createContext(initialState)

// Tworzenie customowego hooka dla contextu

export const useBoredContext = () => useContext(BoredContext)