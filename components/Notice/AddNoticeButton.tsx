// 공지사항 추가 버튼

'use client'

import { useRouter } from "next/navigation"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddNoticeButton () {
	const router = useRouter()
	return (
		<>
			<button className="btn btn-neutral cursor-pointer m-2" onClick={() => router.push('/notices/add')}><FontAwesomeIcon icon={faPlus} className="px-2"/>공지사항 추가</button>
		</>
	)
}