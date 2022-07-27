import React from 'react';
import Tick from '../assets/icon-tick.png'

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | '#008000' | 'rgb(219 39 119)'

type colorSelectorProp = {
    theme : theme
    setUserTheme : React.Dispatch<React.SetStateAction<theme>>
}

export default function ColorSelector({setUserTheme, theme}:colorSelectorProp) {
  const currentColor = theme

  return (
    <div className=' space-y-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-black py-6 mb-7'>
        <p className=' text-base sm:text-lg font-bold'>COLOR</p>
        <div className=' flex items-center justify-center space-x-2'>
            <div className=' flex items-center justify-center relative w-[50px] h-[50px] rounded-full p-1 hover:border-2'>
              <label  className=' w-full h-full rounded-full bg-[#e74f4f] p-2' htmlFor="orange"></label>
              {currentColor === '#e74f4f' &&<span className='flex items-center justify-center absolute top-0 w-full h-full rounded-full bg-transparent p-2'><img className='w-[70%] self-center' src={Tick} alt='tic' /></span>}
            </div>
            <div className=' flex items-center justify-center relative w-[50px] h-[50px] rounded-full p-1 hover:border-2'>
              <label  className=' w-full h-full rounded-full bg-green-600 p-2' htmlFor="green"></label>
              {currentColor === '#008000' &&<span className='flex items-center justify-center absolute top-0 w-full h-full rounded-full bg-transparent p-2'><img className='w-[70%] self-center' src={Tick} alt='tic' /></span>}
            </div>
            <div className=' flex items-center justify-center relative w-[50px] h-[50px] rounded-full p-1 hover:border-2'>
              <label  className=' w-full h-full rounded-full bg-pink-600 p-2' htmlFor="pink"></label>
              {currentColor === 'rgb(219 39 119)' && <span className='flex items-center justify-center absolute top-0 w-full h-full rounded-full bg-transparent p-2'><img className='w-[70%] self-center' src={Tick} alt='tic' /></span>}
            </div>
            
            <input onChange={()=>setUserTheme('#e74f4f')} className=' hidden' type="radio" name="font" value='orange' id='orange'/>
            <input onChange={()=>setUserTheme('#008000')} className=' hidden' type="radio" name="font" value='green' id='green' />
            <input onChange={()=>setUserTheme('rgb(219 39 119)')} className=' hidden' type="radio" name="font" value='pink' id='pink' />
        </div>
      </div>
  );
}
