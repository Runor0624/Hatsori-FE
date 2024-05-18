'use client'
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
	dislikecount: string | number
	postId: number
}

export default function DisLikeButton ({postId, dislikecount}: LikeButtonProps) {
	const router = useRouter()

	const handledisLikeCount = async (id:number) => {
        try {
          await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/post/dislike/${postId}`);
		  alert('비추천했어요!')
		  router.push('/')
        } catch (error) {
          console.error(error);
        }
      }

	return (
		<>
			<div className="w-4/6 border border-blue-500 rounded-lg flex flex-col justify-center lg:w-1/6">
				<FontAwesomeIcon icon={faThumbsDown} className="text-blue-600 font-bold p-2" />
				<h1 className="text-center text-xl text-blue-600 font-bold p-2 cursor-pointer" onClick={() => handledisLikeCount(postId)}>비추천 : {dislikecount}</h1>
			</div>
		</>
	)
}