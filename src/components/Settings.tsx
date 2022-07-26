import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Close from '../assets/icon-close.svg'
import Form from './Form';

type propType = {
	setIsSettingsOpen : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Settings({setIsSettingsOpen}:propType) {
	
	

	

	return (
		<div className=" w-screen h-screen bg-black/50 flex items-center justify-center absolute top-0 left-0">
			<div className="max-w-[90%] w-[89%] sm:w-[450px] md:w-[800px] h-auto rounded-[30px] bg-white relative">
				{/* top */}
				<div className=' w-full text-black flex justify-between items-center border-b-[2px] py-8 px-10 '>
					<p className=' text-3xl font-bold'>Settings</p>
					<img onClick={()=>setIsSettingsOpen(false)} src={Close} className=' w-5 cursor-pointer'  alt="icon-close" />
				</div>

				{/* Form  */}
				<Form setIsSettingsOpen={setIsSettingsOpen} />
			</div>
		</div>
	);
}
