'use client'

import { useRouter } from "next/navigation"
import { faUser, faUserPlus, faPowerOff, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuthStore } from "@/app/util/Zustand/Zustand";

export default function Headers () {
	const router = useRouter()

	const { userId, authority, id, logout } = useAuthStore((state) => ({
		userId: state.userId,
		authority: state.authority,
		id: state.id,
		logout: state.logout,
	}))

	const handleLogout = () => {
		logout()
		alert('로그아웃 성공!')
		router.push('/')
	  }
	return (
		<>
			<div className="navbar border-b-2 border-blue-200 mb-2">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl text-blue-500 dark:text-slate-500" onClick={() => router.push('/')}>Hatsori</a>
			</div>
			<div className="flex-none">

				<div className="dropdown dropdown-end">
				<div tabIndex={0} role="button" className="btn btn-ghost">
					<div className="w-10">
						<p className="text-blue-500 dark:text-slate-500">Menu</p>
					</div>
				</div>
				<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					{authority.length >= 1 && userId.length >= 1 &&(<li onClick={() => router.push(`/mypage/${id}`)}><a><FontAwesomeIcon icon={faUser} /> MyPage</a></li>)}
					{authority.length === 0 && userId.length === 0 && <li onClick={() => router.push('/login')}><a><FontAwesomeIcon icon={faUser} />Login</a></li>}
					{authority.length >= 1 && userId.length >= 1 && (<li><a onClick={handleLogout}><FontAwesomeIcon icon={faPowerOff} />Logout</a></li>)}
				</ul>
				</div>
			</div>
			</div>
		</>
	)
}