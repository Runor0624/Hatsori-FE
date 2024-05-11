import AddForm from "@/components/Visit/AddForm";

export const metadata = {
	title: "방명록 작성",
};

export default function page () {
	return (
		<>
			<h1 className="text-red-600 text-center text-xl font-bold py-4">사용자가 익명의 방명록을 남기도록 합니다</h1>
			<AddForm />
		</>
	)
}