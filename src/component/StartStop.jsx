import React, { useEffect } from "react"
import { useIsActive, useSetIsActive, useSetShow } from "../context/GlobalContext"
import "../style/StartStop.css"

const StartStop = () => {

    const isActive = useIsActive()
    const setIsActive = useSetIsActive()
    const setShow = useSetShow()

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [isActive])

    const detectKeyDown = (e) => {
        if (e.key === ' ') {
            setShow(isActive)
            setIsActive(!isActive)
        }
    }

    return (
        <>
            <div onClick={() => setIsActive(!isActive)} className={'button'}>
                <span className='text'>Start</span>
            </div>
        </>
    )


}

export default StartStop