import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export const useColor = ()=>{
    const color = useContext(ThemeContext)

    return color
}