import AddForm from "@/components/Post/AddForm";

// 상품 추가 페이지
export const metadata = {
	title: "게시글 추가",
};
export default function page () {
	return (
		<>
			<AddForm />
		</>
	)
}