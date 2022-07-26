import { useContext } from "react"
import { TimerContext } from "../context/TimerContext"

export const useTimer = ()=>{
    const timer = useContext(TimerContext)

    return timer
}