import Link from "next/link"
import {PostTypeinfomation} from '@/Types/type'
import moment from "moment";
import { faImage, faThumbsUp, faThumbsDown, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nodata from "../Common/Nodata";

// 아마도 글 리스트가 보여질 부분

const fetchPostList = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post`, {
	  cache: "no-store",
	});
	return response.json();
};

const PostList = async () => {
	const data = await fetchPostList();

	return (
		<>
			<h1 className='text-red-600 text-xl text-center font-bold py-4'>전체 글 리스트를 보여줍니다.</h1>

			{data.length >= 1 && (
			<div className="overflow-x-auto w-full">
			<table className="table">
				<thead className="text-blue-500 text-center">
				<tr>
					<th>제목</th>
					<th>이미지</th>
					<th>좋아요</th>
					<th>싫어요</th>
					<th>작성일</th>
					<th>상세 보기</th>
				</tr>
				</thead>
				<tbody className="text-blue-500 text-center">
				{data.length !== 0 && data.map((item:PostTypeinfomation) => (
				<tr key={item.id}>
					<th>{item.title}</th>
					<td>{item.postimage !== null ? <FontAwesomeIcon icon={faImage} /> : ""}</td>
					<td><FontAwesomeIcon icon={faThumbsUp} className="px-2" />{item.likecount}</td>
					<td><FontAwesomeIcon icon={faThumbsDown} className="px-2" />{item.dislikecount}</td>
					<td>{moment(item.createDate).format("YY-MM-DD HH:mm:ss")}</td>
					
					<td>
					<Link href={`/post/detail/${item.id}`}>
						<FontAwesomeIcon icon={faList} className="px-2" /> 상세 보기
					</Link>
					</td>
					
				</tr>
				))}
				</tbody>
			</table>
			</div>
			)}

			{data.length === 0 && <Nodata />}
		</>
	)
}
export default PostList