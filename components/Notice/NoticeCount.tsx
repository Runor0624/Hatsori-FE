// 공지사항이 몇개인지? 보여주는 목적의 컴포넌트

const fetchNoticeCount = async () => {
	const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notices/count`, {
	  cache: "no-store",
	});
	return response.json();
};

const NoticeCount = async () => {
	const data = await fetchNoticeCount();

	return (
		<>
		{data && data !== null &&
		<p className="text-blue-500 text-center text-xl font-bold py-4">{data.NoticeCount}개의 공지사항이 있어요!</p>
		}
		</>
	)
}
export default NoticeCount