import React from 'react';

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'

type fontProp = {
    font : fonts
    setUserFont : React.Dispatch<React.SetStateAction<fonts>>
}

// font variants
const kumbh = "'Kumbh Sans', sans-serif";
const roboto = "'Roboto Slab', serif";
const monoSpace = "'Space Mono', monospace";

export default function FontSelector({font, setUserFont}:fontProp) {
  return (
    <div className=' space-y-4 flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full text-black py-6 border-b-2'>
        <p className=' text-base sm:text-lg font-bold'>FONT</p>
        <div className=' flex items-center justify-center space-x-2'>
            <div className='relative'>
                 <label style={{fontFamily : kumbh}}  className={font === kumbh? ' w-[45px] h-[45px]  rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': ' text-center flex items-center justify-center text-md w-[45px] h-[45px] text-sm rounded-full bg-gray-300 text-gray-700  '} htmlFor="kumbh">Aa</label>
            </div>
            <div className='relative'>
                 <label style={{fontFamily : roboto}}  className={font === roboto? ' w-[45px] h-[45px]  rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': 'text-center flex items-center justify-center text-md  w-[45px] h-[45px]  rounded-full bg-gray-300 text-gray-700 '} htmlFor="roboto">Aa</label>
            </div>
            <div className=' relative'>
                <label  style={{fontFamily : monoSpace}}  className={font === monoSpace? ' w-[45px] h-[45px] rounded-full bg-gray-700 text-gray-200 text-center flex items-center justify-center text-md ': ' w-[45px] h-[45px] text-center flex items-center justify-center text-md rounded-full bg-gray-300 text-gray-700 '} htmlFor="mono">Aa</label>
            </div>
            <input onChange={()=>setUserFont(kumbh)} style={{fontFamily : kumbh}} className=' hidden' type="radio" name="font" value={kumbh} id='kumbh'/>
            <input onChange={()=>setUserFont(roboto)} style={{fontFamily : roboto}} className=' hidden' type="radio" name="font" value={roboto} id='roboto' />
            <input onChange={()=>setUserFont(monoSpace)} style={{fontFamily : monoSpace}} className=' hidden' type="radio" name="font" value={monoSpace} id='mono' />
        </div>
      </div>
  );
}
