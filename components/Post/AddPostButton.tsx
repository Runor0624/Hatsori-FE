// 글 추가 버튼
'use client'

import { useRouter } from "next/navigation"
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddPostButton () {
	const router = useRouter()
	return (
		<div className="flex flex-col justify-center items-center">
			<button className="btn btn-neutral cursor-pointer m-2 rounded-full" onClick={() => router.push('/post/add')}><FontAwesomeIcon icon={faPen} className="px-2"/></button>
		</div>
	)
}