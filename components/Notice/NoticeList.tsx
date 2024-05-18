import Nodata from "../Common/Nodata";
import DeleteNoticeButton from "./DeleteNoticeButton";
import { NoticeAddTypeinfomation } from "@/Types/type";

const fetchNoticeList = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notices`, {
	  cache: "no-store",
	});
	return response.json();
};


const NoticeList = async () => {
	const data = await fetchNoticeList();
	return (
		<>
		{data.length !== 0 && data.map((item:NoticeAddTypeinfomation) => (
			<div className="flex flex-row justify-between" key={item.id}>

			<div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
			<div className="collapse-title text-xl font-medium">
				{item.title}
			</div>
			<div className="collapse-content"> 
				<p>{item.description}</p>
			</div>
			</div>
				<DeleteNoticeButton item={item} />

			</div>
		))}

		{data.length === 0 && <Nodata />}
		</>
	)
}
export default NoticeList