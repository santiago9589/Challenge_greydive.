import { create } from "zustand";

interface state {
    logged: boolean
    setLogged: (isLogged: boolean) => void
    error: string
    setError: (error: string) => void
}


export const useLogged = create<state>(set => ({
    logged: false,
    setLogged: (isLogged: boolean) => {
        set(state => ({ ...state, logged: isLogged }))
    },
    error: "",
    setError: (error: string) => {
        set(state => ({ ...state, error: error }))
    }
}))