import { createContext, useContext } from "react";

export const AppContext = createContext()

export default function ContexProvider({ children }) {

    return (
        <AppContext.Provider
            value={{
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}