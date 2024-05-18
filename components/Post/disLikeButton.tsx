'use client'
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {PostTypeinfomation} from "@/Types/type"
import axios from "axios";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
	post: PostTypeinfomation; 
}

export default function DisLikeButton ({post}: LikeButtonProps) {
	const router = useRouter()

	const handledisLikeCount = async (id:number) => {
        try {
          await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/post/dislike/${post.id}`);
		  alert('비추천했어요!')
		  router.push('/')
        } catch (error) {
          console.error(error);
        }
      }
	return (
		<>
			<div className="w-1/6 border border-blue-500 rounded-lg flex flex-col justify-center">
				<FontAwesomeIcon icon={faThumbsDown} className="text-blue-600 font-bold p-2" />
				<h1 className="text-center text-xl text-blue-600 font-bold p-2 cursor-pointer" onClick={() => handledisLikeCount(post.id)}>비추천</h1>
			</div>
		</>
	)
}