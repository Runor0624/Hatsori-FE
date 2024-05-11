
export default function Mypage () {
	return (
		<>
			<div className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">ID</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="ID." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Nickname</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md m-1" placeholder="NickName." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">CreateDate</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md m-1" placeholder="CreateDate" />
			</div>
		</>
	)
}