'use client'

import { useRouter } from "next/navigation"
import { faUser, faCircleInfo, faUserPlus, faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Headers () {
	const router = useRouter()
	return (
		<>
			<div className="navbar border-b-2 border-blue-200 mb-2">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl dark: text-blue-500" onClick={() => router.push('/')}>Logo</a>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
				<div tabIndex={0} role="button" className="btn btn-ghost">
					<div className="w-10">
						<p className="dark: text-blue-500">Menu</p>
					</div>
				</div>
				<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<li onClick={() => router.push('/mypage/1')}><a><FontAwesomeIcon icon={faUser} /> MyPage</a></li>
					<li onClick={() => router.push('/notices')}><a><FontAwesomeIcon icon={faCircleInfo} />Notice</a></li>
					<li onClick={() => router.push('/signup')}><a><FontAwesomeIcon icon={faUserPlus} />SignUp</a></li>
					<li onClick={() => router.push('/login')}><a><FontAwesomeIcon icon={faUser} />Login</a></li>
					<li><a><FontAwesomeIcon icon={faPowerOff} />Logout</a></li>
				</ul>
				</div>
			</div>
			</div>
		</>
	)
}