'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignUpForm () {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">회원가입 Form</h1>
				<p className="py-2 font-bold text-blue-500 dark:text-slate-500">투입 항목 : ID, PW, 닉네임, 사용자 프로필 이미지 (이 부분은 선택 사항)</p>
				{/* React-Hook-Form으로 데이터 입력이 안될 경우 에러 텍스트 출력 */}
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">ID</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="사용할 ID를 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Password</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" type="password" placeholder="사용할 Password를 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Nickname</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="사용할 NickName를 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Profile Image</label>
				<input type="file" className="file-input w-full max-w-md" />

				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit"><FontAwesomeIcon icon={faPlus} className="px-2" />회원가입</button>
				{/* 이 부분은 이미지를 제외한 모든 값에 입력값이 들어가면 활성화 하거나, 조건부 렌더링으로 보여지도록? */}
			</form>
		</>
	)
}