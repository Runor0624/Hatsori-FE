'use client'

import { useRouter } from "next/navigation"
import { faUser, faUserPlus, faPowerOff, faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Headers () {
	const router = useRouter()
	return (
		<>
			<div className="navbar border-b-2 border-blue-200 mb-2">
			<div className="flex-1">
				<a className="btn btn-ghost text-xl text-blue-500 dark:text-slate-500" onClick={() => router.push('/')}>Hatsori</a>
			</div>
			<div className="flex-none">

				<div className="indicator m-2">
				<span className="indicator-item badge badge-secondary">99+</span> 
				<button className="btn bg-inherit border-none"><FontAwesomeIcon icon={faBell} className="text-white" /></button>
				</div>

				<div className="dropdown dropdown-end">
				<div tabIndex={0} role="button" className="btn btn-ghost">
					<div className="w-10">
						<p className="text-blue-500 dark:text-slate-500">Menu</p>
					</div>
				</div>
				<ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
					<li onClick={() => router.push('/mypage/1')}><a><FontAwesomeIcon icon={faUser} /> MyPage</a></li>
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