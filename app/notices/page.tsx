import AddNoticeButton from "@/components/Notice/AddNoticeButton";
import NoticeList from "@/components/Notice/NoticeList";

export const metadata = {
	title: "공지사항 페이지",
};

export default function page () {
	return (
		<>
			<h1 className="text-center text-red-600 text-xl font-bold py-4">관리자가 작성한 공지사항 입니다.</h1>

			<NoticeList />
			<AddNoticeButton />
		</>
	)
}