// 특정 글 에 대한 상세 페이지
'use client'
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import moment from "moment"
import { useParams, usePathname } from "next/navigation"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LikeButton from "./LikeButton"
import DisLikeButton from "./disLikeButton"
import Image from "next/image"

export default function DetailPost () {
	const params = useParams()
	const pathname = usePathname()
	const { data, isLoading } = useQuery({
        queryKey: ['postdetaildata'],
        queryFn: async () => {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/post/detail/${params.id}`,
          )
          return response.data
        },
      })
    
      if (isLoading) {
        return (
          <p className='text-center text-2xl text-red-600 font-bold'>Loading...</p>
        )
      }

	  const CopyLink = () => {
		navigator.clipboard.writeText(`http://localhost:3000${pathname}`)
		alert('링크 복사를 성공했어요!')
	  }
	return (
		<>
			<div className="w-2/3 flex flex-col justify-center items-center m-auto my-2">
				<section className="py-4"> {/* 글 에 대한 정보를 보여주는 부분 */}
					<h1 className="text-blue-500 text-2xl font-bold py-4">글 제목 : {data && data.title}</h1>
					<p className="text-blue-500 font-bold py-4">작성시간 : {moment(data.createDate).format("YY-MM-DD HH:mm:ss")}  </p>
					<p className="text-center text-sm text-blue-500 py-4" onClick={CopyLink}><FontAwesomeIcon icon={faLink} className="px-2" />링크 복사 버튼</p>

					{data.postimage !== null && 
						<Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${data.postimage.split('/').pop()}`} width={200} height={200} alt="postimage" className="rounded-full mx-4" />
					}

					<p className="text-center text-xl text-blue-500 font-bold py-6">본문 : {data && data.description}</p>
				</section>		
			</div>
			
			<div className="w-2/3 flex flex-row justify-center items-center m-auto my-2">
				<LikeButton post={data} />
				<DisLikeButton post={data} />
			</div>
		</>
	)
}