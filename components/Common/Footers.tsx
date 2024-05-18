import { faLink, faCircleInfo , faBook, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footers () {
	return (
		<>
			<footer className="footer footer-center p-4 text-base-content border-t-2 border-blue-200 mt-2">
				<h4 className="text-blue-500 dark:text-slate-500">개인프로젝트</h4>
				<div className="flex flex-row justify-center">
					<Link href='https://github.com/Runor0624' className="font-bold text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faLink} className="px-2" />GitHub</Link>
					<Link href='/notices' className="font-bold cursor-pointer text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faCircleInfo} className="px-2" />Notice</Link>
					<Link href='/visit' className="font-bold cursor-pointer text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faBook} className="px-2" />방명록</Link>
					<Link href='/visit' className="font-bold cursor-pointer text-blue-500 dark:text-slate-500"><FontAwesomeIcon icon={faComment} className="px-2" />TMI</Link>
				</div>
			</footer>
		</>
	)
}