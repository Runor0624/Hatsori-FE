'use client'
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {PostTypeinfomation} from "@/Types/type"
import axios from "axios";
import { useRouter } from "next/navigation";

interface LikeButtonProps {
	post: PostTypeinfomation; 
}

export default function LikeButton ({post}: LikeButtonProps) {
	const router = useRouter()

	const handleLikeCount = async (id:number) => {
        try {
          await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/post/like/${post.id}`);
		  alert('추천했어요!')
		  router.push('/')
        } catch (error) {
          console.error(error);
        }
      }
	return (
		<>
			<div className="w-1/6 mx-2 border border-blue-500 rounded-lg flex flex-col justify-center">
				<FontAwesomeIcon icon={faThumbsUp} className="text-blue-600 font-bold p-2" />
				<h1 className="text-center text-xl text-blue-600 font-bold p-2 cursor-pointer" onClick={() => handleLikeCount(post.id)}>추천</h1>
			</div>
		</>
	)
}