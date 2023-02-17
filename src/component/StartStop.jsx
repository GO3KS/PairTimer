import React from "react"
import { useIsActive, useSetIsActive } from "../context/GlobalContext"

const StartStop = () => {

    const isActive = useIsActive()
    const setIsActive = useSetIsActive()

    return (
        <>
            <button onClick={() => setIsActive(!isActive)}>Start</button>
        </>
    )


}

export default StartStop