import moment from "moment"
import DeleteNoticeButton from "./DeleteNoticeButton";
import { NoticeAddTypeinfomation } from "@/Types/type";
const fetchPosts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notices`, {
	  cache: "no-store",
	});
	return response.json();
};


const NoticeList = async () => {
	const data = await fetchPosts();
	return (
		<>
		{data && data.map((item:NoticeAddTypeinfomation) => (
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
		</>
	)
}
export default NoticeList