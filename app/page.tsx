import Link from "next/link";

export const metadata = {
	title: "헛소리",
};
export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center m-auto">
        <Link href='/notices' className="text-center text-xl text-red-600 font-bold py-2">아마도 여기는 공지사항으로 넘어가는 링크를 제공?</Link>
      </div>
      <p className="text-center text-xl text-red-600">Hello World!</p>
    </main>
  )
}
