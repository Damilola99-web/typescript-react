import React, { useState } from 'react';
import { useColor } from '../hooks/useColor';
import { useTheme } from '../hooks/useTheme';
import { useTimer } from '../hooks/useTimer';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';
import TimeForm from './TimeForm';

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | '#008000' | 'rgb(219 39 119)'

type time = {
  promodoro: number;
	long: number;
	short: number;
}

type formProp = {
    setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({setIsSettingsOpen}:formProp) {
    const contextTheme = useTheme();
    const color = useColor()
    const timer = useTimer()
    const initialTime:time = {
      promodoro : timer?.promodoro!,
      long: timer?.long!,
      short : timer?.short!

    }
    const initialTheme = color?.state.theme
    const initialFont = contextTheme?.state.font
    const changeFont = contextTheme?.changeFont;
    const changeTheme = color?.changeTheme;
    


    const [font, setUserFont] = useState<fonts>(initialFont!)
    const [theme, setUserTheme] = useState<theme>(initialTheme!)
    const [time, setUserTime] = useState<time>(initialTime)
   
    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        changeFont?.(font)
        changeTheme?.(theme)
        setIsSettingsOpen(false)
        timer?.changeLong(time.long)
        timer?.changeShort(time.short)
        timer?.changePromodoro(time.promodoro)
    }


  return (
    <form className='px-10' onSubmit={handleSubmit}>
      {/* time inputs */}
      <TimeForm time={time} setUserTime={setUserTime} />


      {/* fonts */}
      <FontSelector font={font} setUserFont={setUserFont} />

      {/* colors  */}
      <ColorSelector theme={theme} setUserTheme={setUserTheme} />
      
      <button type='submit' style={{backgroundColor: color?.state.theme}} className=' absolute bottom-[-20px] left-[calc(50%-75px)] w-[170px] h-[50px] rounded-[2rem] text-white'>Apply</button>
    </form>
  );
}
