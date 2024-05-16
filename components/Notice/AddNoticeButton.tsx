// 공지사항 추가 버튼

'use client'

import { useRouter } from "next/navigation"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "@/app/util/Zustand/Zustand";

export default function AddNoticeButton () {
	const { authority } = useAuthStore((state) => ({
		authority: state.authority,
	}))

	const router = useRouter()
	return (
		<>
		{authority === `${process.env.NEXT_PUBLIC_ADMIN}` && (
			<button className="btn btn-neutral cursor-pointer m-2" onClick={() => router.push('/notices/add')}><FontAwesomeIcon icon={faPlus} className="px-2"/>공지사항 추가</button>
		)}
		</>
	)
}