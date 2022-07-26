import React, { useState } from 'react';
import { useColor } from '../hooks/useColor';
import { useTheme } from '../hooks/useTheme';
import ColorSelector from './ColorSelector';
import FontSelector from './FontSelector';

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'

type formProp = {
    setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({setIsSettingsOpen}:formProp) {
    const contextTheme = useTheme();
    const color = useColor()
    const initialTheme = color?.state.theme
    const initialFont = contextTheme?.state.font
    const changeFont = contextTheme?.changeFont;
    const changeTheme = color?.changeTheme;
    


    const [font, setUserFont] = useState<fonts>(initialFont!)
    const [theme, setUserTheme] = useState<theme>(initialTheme!)

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        changeFont?.(font)
        changeTheme?.(theme)
        setIsSettingsOpen(false)
    }


  return (
    <form className='px-10' onSubmit={handleSubmit}>
      {/* fonts */}
      <FontSelector font={font} setUserFont={setUserFont} />

      {/* colors  */}
      <ColorSelector setUserTheme={setUserTheme} />
      
      <button type='submit' style={{backgroundColor: color?.state.theme}} className=' absolute bottom-[-20px] left-[calc(50%-75px)] w-[150px] h-[40px] rounded-[2rem] text-white'>Apply</button>
    </form>
  );
}
