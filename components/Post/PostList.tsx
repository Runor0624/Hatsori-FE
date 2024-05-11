import Link from "next/link"

// 아마도 글 리스트가 보여질 부분
export default function PostList () {
	return (
		<>
		<h1 className="text-blue-500 text-center text-xl font-bold py-4">무한스크롤 or 페이지네이션?</h1>
			<div className="overflow-x-auto bg-white">
			<table className="table">
				{/* head */}
				<thead>
				<tr>
					<th></th>
					<th>Name</th>
					<th>Job</th>
					<th>Favorite Color</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th>1</th>
					<td>Cy Ganderton</td>
					<td>Quality Control Specialist</td>
					<td>Blue</td>
				</tr>
				</tbody>
			</table>
			</div>
		</>
	)
}