'use client'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
	likecount: string | number
	postId: number
}

export default function LikeButton ({likecount, postId}: LikeButtonProps) {
	const router = useRouter()

	const handleLikeCount = async (id:number) => {
        try {
          await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/post/like/${postId}`);
		  alert('추천했어요!')
		  router.push('/')
        } catch (error) {
          console.error(error);
        }
      }

	return (
		<>
			<div className="w-4/6 mx-2 border border-blue-500 rounded-lg flex flex-col justify-center lg:w-1/6">
				<FontAwesomeIcon icon={faThumbsUp} className="text-blue-600 font-bold p-2" />
				<h1 className="text-center text-xl text-blue-600 font-bold p-2 cursor-pointer" onClick={() => handleLikeCount(postId)}>추천 : {likecount}</h1>
			</div>
		</>
	)
}