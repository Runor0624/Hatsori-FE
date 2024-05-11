'use client'

import { useRouter } from "next/navigation"
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddVisitButton () {
	const router = useRouter()
	return (
		<>
			<button className="btn btn-neutral cursor-pointer m-2" onClick={() => router.push('/visit/add')}><FontAwesomeIcon icon={faPlus} className="px-2"/>방명록 추가</button>
		</>
	)
}