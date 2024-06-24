import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>({})

export const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }: any) => {

    const [theme, setTheme] = useState("light")

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const login = (username: string, password: string) => {
        setUserData({username, password})
    }

    const switchTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    }

    return (
        <AppContext.Provider value={{ userData, login, theme, switchTheme }}>
            { children }
        </AppContext.Provider>
    )
}