// 데이터가 없을때 조건부 렌더링으로 등장
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon  } from "@fortawesome/react-fontawesome";

export default function Nodata () {
	return (
		<div className="flex flex-col justify-center items-center">
			<FontAwesomeIcon icon={faX} className="text-red-600 text-4xl font-bold py-4" />
			<h1 className="text-red-600 text-2xl font-bold py-4">현재 데이터가 없어요!</h1>
		</div>
	)
}