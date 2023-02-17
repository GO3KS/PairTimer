import React, { createContext, useState } from 'react'
const GlobalContext = createContext()

export const GlobalContextProvider = (props) => {
    const { children } = props
    const [time, setTime] = useState(0)
    const [isActive, setIsActive] = useState(false)

    const state = {
        time,
        setTime,
        isActive,
        setIsActive,
    }

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useTime = () => React.useContext(GlobalContext).time
export const useSetTime = () => React.useContext(GlobalContext).setTime
export const useIsActive = () => React.useContext(GlobalContext).isActive
export const useSetIsActive = () => React.useContext(GlobalContext).setIsActive
