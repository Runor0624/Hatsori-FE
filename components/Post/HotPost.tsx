import {PostTypeinfomation} from '@/Types/type'
import { faThumbsUp ,faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import Link from 'next/link';
import Nodata from '../Common/Nodata';

const fetchHotPostList = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/hotpost`, {
	  cache: "no-store",
	});
	return response.json();
};
const HotPost = async () => {
	const data = await fetchHotPostList();

	return (
		<>
		 	<h1 className='text-red-600 text-xl text-center font-bold py-4'>추천수가 높은 글 만 따로 보여줍니다</h1>
			{data.length >= 1 && (
			<div className="grid grid-cols-4 gap-2 w-max">
			 {data.length !== 0 && data.map((item:PostTypeinfomation) => (

			 <div className="card bg-base-100 shadow-xl m-2" key={item.id}>
			<div className="card-body">
				<h2 className="text-center text-xl font-bold py-2">제목 : {item.title}</h2>
				<p className='text-center py-4'>본문 : {item.description}</p>
				<p>작성 시간 : {moment(item.createDate).format("YY-MM-DD HH:mm:ss")}</p>

				<p className='text-center py-4'><FontAwesomeIcon icon={faThumbsUp} className='px-2' />좋아요 : {item.likecount}, <FontAwesomeIcon icon={faThumbsDown} className='px-2' /> 싫어요 : {item.dislikecount} </p>
				<Link href={`/post/detail/${item.id}`} className='text-center text-slate-300 font-bold'>
					상세보기
				</Link>
			</div>
			 
			</div>
			))}
			</div>
			)}

			{data.length === 0 && <Nodata />}
		</>
	)
}
export default HotPost