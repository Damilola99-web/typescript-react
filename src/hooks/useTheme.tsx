import { useContext } from "react";
import { newContext } from "../context/Reducer";

export const useTheme =()=>{
    const theme = useContext(newContext)
    return theme
}