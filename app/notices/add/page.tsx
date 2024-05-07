import AddForm from "@/components/Notice/AddForm";

export const metadata = {
	title: "공지사항 추가 페이지",
};

export default function page () {
	return (
		<>
			<h1 className="text-red-600 text-center text-xl font-bold py-4">관리자 전용 - 공지사항 추가</h1>
			<AddForm />
		</>
	)
}