import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'

type formProp = {
    setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Form({setIsSettingsOpen}:formProp) {
    const contextTheme = useTheme();
    const initialTheme = contextTheme?.state.theme
    const initialFont = contextTheme?.state.font
    const changeFont = contextTheme?.changeFont;
    const changeTheme = contextTheme?.changeTheme;
    const kumbh = "'Kumbh Sans', sans-serif";
    const roboto = "'Roboto Slab', serif";
    const monoSpace = "'Space Mono', monospace";


    const [font, setUserFont] = useState<fonts>("'Kumbh Sans', sans-serif")
    const [theme, setUserTheme] = useState<theme>('#e74f4f')

    const handleSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        changeFont?.(font)
        changeTheme?.(theme)
        setIsSettingsOpen(false)
    }


  return (
    <form className='px-10' onSubmit={handleSubmit}>
        {/* fonts */}
      <div className=' space-y-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-black py-6 border-b-2'>
        <p className=' text-base sm:text-lg font-bold'>FONT</p>
        <div className=' flex items-center justify-center space-x-2'>
            <div className='relative'>
                 <label  className={font === kumbh? ' w-[45px] h-[45px]  rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': ' text-center flex items-center justify-center text-md w-[45px] h-[45px] text-sm rounded-full bg-gray-300 text-gray-700  '} htmlFor="kumbh">Aa</label>
            </div>
            <div className='relative'>
                 <label  className={font === roboto? ' w-[45px] h-[45px]  rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': 'text-center flex items-center justify-center text-md  w-[45px] h-[45px]  rounded-full bg-gray-300 text-gray-700 '} htmlFor="roboto">Aa</label>
            </div>
            <div className=' relative'>
                <label  className={font === monoSpace? ' w-[45px] h-[45px] rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': ' w-[45px] h-[45px] text-center flex items-center justify-center text-md rounded-full bg-gray-300 text-gray-700 '} htmlFor="mono">Aa</label>
            </div>
            <input onChange={()=>setUserFont(kumbh)} style={{fontFamily : kumbh}} className=' hidden' type="radio" name="font" value={kumbh} id='kumbh'/>
            <input onChange={()=>setUserFont(roboto)} style={{fontFamily : roboto}} className=' hidden' type="radio" name="font" value={roboto} id='roboto' />
            <input onChange={()=>setUserFont(monoSpace)} style={{fontFamily : monoSpace}} className=' hidden' type="radio" name="font" value={monoSpace} id='mono' />
        </div>
      </div>

      {/* colors  */}
      <div className=' space-y-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-black py-6 mb-7'>
        <p className=' text-sm font-bold'>COLOR</p>
        <div className=' flex items-center justify-center space-x-2'>
            <label  className=' w-[45px] h-[45px] rounded-full bg-[#e74f4f] p-2' htmlFor="orange"></label>
            <label  className=' w-[45px] h-[45px] rounded-full bg-green-600 p-2' htmlFor="green"></label>
            <label  className=' w-[45px] h-[45px] rounded-full bg-pink-600 p-2' htmlFor="pink"></label>
            <input onChange={()=>setUserTheme('#e74f4f')} className=' hidden' type="radio" name="font" value='orange' id='orange'/>
            <input onChange={()=>setUserTheme('green')} className=' hidden' type="radio" name="font" value='green' id='green' />
            <input onChange={()=>setUserTheme('rgb(219 39 119)')} className=' hidden' type="radio" name="font" value='pink' id='pink' />
        </div>
      </div>
      <button type='submit' style={{backgroundColor: contextTheme?.state.theme}} className=' absolute bottom-[-20px] left-[calc(50%-75px)] w-[150px] h-[40px] rounded-[2rem] text-white'>Apply</button>
    </form>
  );
}
