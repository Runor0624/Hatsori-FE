// 포스트를  추가하는 Form
'use client'
export default function AddForm() {
	return (
		<>
			<form className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md min-h-screen w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">포스트 추가 Form</h1>
				{/* 들어갈 내용 - 제목, 본문, 카테고리?, 이미지 2장 (선택) */}
			</form>
		</>
	)
}