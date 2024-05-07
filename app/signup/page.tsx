import SignUpForm from "@/components/Auth/SignUp";
import Link from "next/link";

// 회원가입
export const metadata = {
	title: "회원가입",
};
export default function page () {
	return (
		<>
			<SignUpForm />
			<div className="m-auto my-2 flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<Link href='/login' className="py-2 text-slate-300 font-bold underline">이미 회원인가요? 로그인하러가기</Link>
			</div>
		</>
	)
}