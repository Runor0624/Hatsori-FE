'use client'
export default function SignUpForm () {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">회원가입 Form</h1>
				<p className="py-2 font-bold text-blue-500 dark:text-slate-500">투입 항목 : ID, PW, 닉네임, 사용자 프로필 이미지 (이 부분은 선택 사항)</p>
				{/* React-Hook-Form으로 데이터 입력이 안될 경우 에러 텍스트 출력 */}
			</form>
		</>
	)
}