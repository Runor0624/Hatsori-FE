'use client'
export default function LoginForm () {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">로그인 Form</h1>
				<p className="py-2 font-bold text-blue-500 dark:text-slate-500">투입 항목 : ID, PW</p>
				{/* React-Hook-Form으로 데이터 입력이 안될 경우 에러 텍스트 출력 */}
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">ID</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="가입한 ID를 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Password</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" type="password" placeholder="가입한 Password를 입력하시오." />

				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit">로그인</button>
			</form>
		</>
	)
}