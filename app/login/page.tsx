import LoginForm from "@/components/Auth/Login";
import Link from "next/link";

// 로그인 페이지
export const metadata = {
	title: "로그인 페이지",
};

export default function page () {
	return (
		<>
			<LoginForm />
			<div className="m-auto my-2 flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<Link href='/signup' className="py-2 text-slate-300 font-bold underline">회원이 아닌가요?? 가입하러가기</Link>
			</div>

			<div className="m-auto my-2 flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<Link href='/' className="py-2 text-slate-300 text-sm font-bold">로그인 안 하고 사이트 글 확인하기</Link>
			</div>
		</>
	)
}