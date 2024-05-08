// 공지사항을 추가하는 Form
'use client'
export default function AddForm() {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md min-h-screen w-2/3 lg:w-1/3">
				{/* 들어갈 내용 - 제목, 설명, 카테고리? */}
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">카테고리를 선택하시오</label>
				<select className="select w-11/12 max-w-md">
				<option disabled selected>테스트</option>
				<option>테스트</option>
				<option>테스트2</option>
				<option>테스트3</option>
				</select>

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">제목</label>
				<input className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="공지사항의 제목을 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">본문</label>
				<textarea className="w-11/12 h-96 border border-slate-300 rounded-md resize-none" placeholder="공지사항의 본문을 입력하시오." />

				<input className="w-11/12 h-8 border border-slate-300 rounded-md my-1"  placeholder="작성하는 사용자 관련 정보를 받는 부분" />
				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit">공지사항 추가</button>
			</form>
		</>
	)
}