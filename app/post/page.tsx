import AddPostButton from "@/components/Post/AddPostButton";
import PostList from "@/components/Post/PostList";

export const metadata = {
	title: "글 조회 페이지",
};

export default function page () {
	return (
		<>
			<PostList />
			<AddPostButton />
			{/* 글 작성은 로그인 사용자에게만 활성화 할 예정 */}
		</>
	)
}