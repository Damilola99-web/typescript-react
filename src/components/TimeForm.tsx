type time = {
    promodoro: number;
      long: number;
      short: number;
}

type timeProp = {
    time : time
    setUserTime : React.Dispatch<React.SetStateAction<time>>
}

export default function({time, setUserTime}:timeProp) {
		return (
		<div className=" text-black w-full">
			<h1 className=" my-4">TIME(MINUTES)</h1>
			<div className=" w-full grid md:grid-cols-3 gap-4 mb-4">
				<label className=" flex flex-row justify-between items-center md:items-start md:justify-center md:flex-col md:space-y-3">
					<span className=" text-base font-bold text-gray-500">Promodoro</span>
					<input
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserTime({...time, promodoro: Number(e.target.value) })}
						min={1}
						defaultValue={time.promodoro}
						className=" w-[40%] md:w-[100%] h-[45px] px-4 focus:border-0 focus:outline-0 rounded-lg bg-[#eff1fa]"
						type="number"
					/>
				</label>
				<label className=" flex flex-row justify-between items-center md:items-start md:justify-center md:flex-col md:space-y-3">
					<span className=" text-base font-bold text-gray-500">Short Break</span>
					<input
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserTime({...time, short: Number(e.target.value) })}
						min={1}
						defaultValue={time.short}
						className=" w-[40%] md:w-[100%] h-[45px] px-4 focus:border-0 focus:outline-0 rounded-lg bg-[#eff1fa]"
						type="number"
					/>
				</label>
				<label className=" flex flex-row justify-between items-center md:items-start md:justify-center md:flex-col md:space-y-3">
					<span className=" text-base font-bold text-gray-500">Long Break</span>
					<input
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setUserTime({...time, long: Number(e.target.value) })}
						min={1}
						defaultValue={time.long}
						className=" w-[40%] md:w-[100%] h-[45px] px-4 focus:border-0 focus:outline-0 rounded-lg bg-[#eff1fa]"
						type="number"
					/>
				</label>
			</div>
		</div>
	);
}
