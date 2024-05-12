import moment from "moment"
import { VisitTypeinfomation } from "@/Types/type";
import DeleteVisitButton from "./DeleteVisitButton";

const fetchPosts = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/visit`, {
	  cache: "no-store",
	});
	return response.json();
};

const VisitList = async () => {
	const data = await fetchPosts();
	return (
		<div className="grid grid-cols-4 gap-2 w-max">
		{data && data.map((item:VisitTypeinfomation) => (
			<div className="card bg-base-100 shadow-xl m-2" key={item.id}>
			<div className="card-body">
				<h2 className="text-2xl text-center font-bold py-2">{item.title}</h2>
				<p className="text-center">{item.description}</p>
				<p className="text-center">UserIP : {(item.userIp).slice(0,7)}</p>
				<p className="text-center text-sm text-slate-300 font-bold py-2">Time :  {moment(item.createDate).format("YYYY-MM-DD HH:mm:ss")}</p>
				<DeleteVisitButton item={item} />
			</div>
			</div>
		))}
		</div>
	)
}
export default VisitList