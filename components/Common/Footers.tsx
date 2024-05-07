import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footers () {
	return (
		<>
			<footer className="footer footer-center p-4 text-base-content border-t-2 border-blue-200 mt-2">
				<p className="dark: text-blue-500">개인프로젝트 - 수정 예정</p>
				<p className="font-bold cursor-pointer dark: text-blue-500"><FontAwesomeIcon icon={faLink} />GitHub</p>
			</footer>
		</>
	)
}