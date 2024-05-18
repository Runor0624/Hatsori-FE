'use client'

import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import moment from "moment"
import Image from "next/image"
import { useParams } from "next/navigation"

export default function Mypage () {
	const params = useParams()

    const { data, isLoading } = useQuery({
        queryKey: ['mydata'],
        queryFn: async () => {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/user/detail/${params.id}`,
          )
          return response.data
        },
      })
    
      if (isLoading) {
        return (
          <p className='text-center text-2xl text-red-600 font-bold'>Loading...</p>
        )
      }

	  return (
		<>
			<div className="m-auto my-2 flex flex-col justify-center items-center w-2/3 lg:w-1/3">
				<section className="flex flex-row">
				{data.userprofileimage !== null && 
				<Image src={`${process.env.NEXT_PUBLIC_API_URL}/uploads/${data.userprofileimage.split('/').pop()}`} width={200} height={200} alt="userimage" className="rounded-full mx-4" />
				}

					<div>
						<div>
							<label className="font-bold p-2 text-blue-500 dark:text-slate-500">사용자 ID</label>
							<input value={data.userId} readOnly className="w-11/12 h-8 border border-slate-300 rounded-md m-2" placeholder="ID." />
						</div>

						<div>
							<label className="font-bold p-2 text-blue-500 dark:text-slate-500">닉네임</label>
							<input value={data.nickname} readOnly className="w-11/12 h-8 border border-slate-300 rounded-md m-2" placeholder="NickName." />
						</div>
					</div>
				</section>
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">회원가입 날짜</label>
				<input value={moment(data.createDate).format('YYYY-MM-DD HH:mm:ss')} readOnly className="w-11/12 h-8 border border-slate-300 rounded-md m-1" placeholder="CreateDate" />
			</div>
		</>
	)
}