import { faLink, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footers () {
	return (
		<>
			<footer className="footer footer-center p-4 text-base-content border-t-2 border-blue-200 mt-2">
				<p className="text-blue-500 dark:text-slate-500">개인프로젝트 - 수정 예정</p>
				<div className="flex flex-row justify-center">
					<p className="font-bold cursor-pointer text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faLink} className="px-2" />GitHub</p>
					<Link href='/notices' className="font-bold cursor-pointer text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faCircleInfo} className="px-2" />Notice</Link>
				</div>
			</footer>
		</>
	)
}