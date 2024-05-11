// 특정 글 에 대한 상세 페이지
export default function DetailPost () {
	return (
		<>
			<div className="w-2/3 border border-blue-500 flex flex-col justify-center items-center m-auto my-2">
				<section className="py-4"> {/* 글 에 대한 정보를 보여주는 부분 */}
					<h1 className="text-blue-500 text-2xl font-bold py-4">글 제목</h1>
					<p className="text-blue-500 font-bold py-4">작성자 : 홍길동 · 작성시간 :  </p>
					<p>링크 복사 버튼</p>
					<p>글에 대한 정보</p>
					<p>클릭하면 링크를 복사하도록</p>
				</section>

				<section className="border-b-2 border-blue-500 w-full">

				</section>

				<section className="py-4"> {/* 댓글 에 대한 정보를 보여주는 부분 */}
					<p className="text-red-600 font-bold">댓글 관련 컴포넌트 배치 지역</p>

					<p className="text-blue-500 font-bold py-4">0개의 댓글</p>

					<p>댓글을 입력하는 Form</p>
				</section>
			</div>
		</>
	)
}