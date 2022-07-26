import React from 'react';
type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'

type colorSelectorProp = {
    setUserTheme : React.Dispatch<React.SetStateAction<theme>>
}

export default function ColorSelector({setUserTheme}:colorSelectorProp) {
  return (
    <div className=' space-y-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-black py-6 mb-7'>
        <p className=' text-base sm:text-lg font-bold'>COLOR</p>
        <div className=' flex items-center justify-center space-x-2'>
            <label  className=' w-[45px] h-[45px] rounded-full bg-[#e74f4f] p-2' htmlFor="orange"></label>
            <label  className=' w-[45px] h-[45px] rounded-full bg-green-600 p-2' htmlFor="green"></label>
            <label  className=' w-[45px] h-[45px] rounded-full bg-pink-600 p-2' htmlFor="pink"></label>
            <input onChange={()=>setUserTheme('#e74f4f')} className=' hidden' type="radio" name="font" value='orange' id='orange'/>
            <input onChange={()=>setUserTheme('green')} className=' hidden' type="radio" name="font" value='green' id='green' />
            <input onChange={()=>setUserTheme('rgb(219 39 119)')} className=' hidden' type="radio" name="font" value='pink' id='pink' />
        </div>
      </div>
  );
}
