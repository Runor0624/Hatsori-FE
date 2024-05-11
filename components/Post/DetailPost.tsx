// 특정 글 에 대한 상세 페이지
export default function DetailPost () {
	return (
		<>
			<div className="w-3/4 border border-blue-500 flex flex-col justify-center items-center m-auto my-2">
				<section className="py-4"> {/* 글 에 대한 정보를 보여주는 부분 */}
					<p>글에 대한 정보</p>
					<p>클릭하면 링크를 복사하도록</p>
				</section>

				<section className="border-b-2 border-blue-500 w-full">

				</section>

				<section className="py-4"> {/* 댓글 에 대한 정보를 보여주는 부분 */}
					<p className="text-red-600 font-bold">댓글 관련 컴포넌트 배치 지역</p>
				</section>
			</div>
		</>
	)
}