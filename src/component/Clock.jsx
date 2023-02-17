import React, { useEffect } from 'react'
import '../style/Clock.css'
import { useIsActive, useSetTime, useTime } from '../context/GlobalContext'

const Clock = () => {

    const time = useTime()
    const setTime = useSetTime()
    const isActive = useIsActive()

    useEffect(() => {
        let interval = null
        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10)
        } else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [isActive])



    return (
        <div className='container'><h1>
            <span>
                {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
            </span>
            <span>
                {('0' + Math.floor((time / 1000) % 60)).slice(-2)}.
            </span>
            <span>
                {('0' + ((time / 10) % 100)).slice(-2)}
            </span>
        </h1></div>
    )

}

export default Clock