import React from 'react';
import Close from '../assets/icon-close.svg'
import { useColor } from '../hooks/useColor';
import Form from './Form';

type propType = {
	setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>
}


export default function Settings({setIsSettingsOpen}:propType) {
	const color = useColor()
	const themeColor = color?.state.theme
	const colorValue = themeColor?.slice(0,7);
	return (
		<div className=" w-screen max bg-black/50 flex items-center justify-center absolute top-0 left-0 py-12">
			<div className="max-w-[90%] w-[89%] sm:w-[450px] md:w-[800px] h-auto rounded-[30px] bg-white relative">
				{/* top */}
				<div className=' w-full text-black flex justify-between items-center border-b-[2px] py-8 px-10 '>
					<p className=' text-3xl font-bold'>Settings</p>
					<div onClick={()=>setIsSettingsOpen(false)}  className={` relative transition-all hover:bg-[${colorValue}] rounded-full justify-center w-[20px] p-6 flex cursor-pointer`}>
						<img src={Close} alt="icon-close" className=' absolute flex self-center w-4 h-4'  />
					</div>
				</div>

				{/* Form  */}
				<Form setIsSettingsOpen={setIsSettingsOpen} />
			</div>
		</div>
	);
}
