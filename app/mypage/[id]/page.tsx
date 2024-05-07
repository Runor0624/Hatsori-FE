import Mypage from "@/components/Auth/MyPage";

export const metadata = {
	title: "사용자 마이 페이지",
};
export default function page () {
	return (
		<>
			<h1 className="text-center text-xl text-red-600 font-bold py-4">사용자의 간단한 정보를 볼 수 있어요!</h1>
			<Mypage />
		</>
	)
}