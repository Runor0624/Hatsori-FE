// 방명록을 추가하는 Form
'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function AddForm() {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md min-h-screen w-2/3 lg:w-1/3">

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">제목</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="제목을 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">본문</label>
				<textarea className="w-11/12 h-96 border border-slate-300 rounded-md resize-none" placeholder="본문을 입력하시오." />

				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit"><FontAwesomeIcon icon={faPlus} className="px-2" />추가</button>
			</form>
		</>
	)
}