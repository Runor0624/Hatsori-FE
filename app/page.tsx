import AddPostButton from "@/components/Post/AddPostButton";
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

      <div className="flex flex-col justify-center items-center m-auto my-2">
        <Link href="/post">
        <h1 className="p-4 text-blue-500 text-center font-bold">인기 많은 게시글</h1>
        <section className="text-red-600 w-max border border-blue-500 m-4">
          <div className="grid grid-cols-3">
            <h1>글 제목</h1>
            <p>작성일, 작성자</p>
            <p>이미지가 있으면 이미지 아이콘</p>
          </div>
          <p>좋아요, 싫어요, 댓글 카운트</p>
        </section>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center m-auto">
        <h1 className="p-4 text-red-600">최신 글 일부를 보여주는 부분</h1>
        <section className="text-red-600 w-max border border-blue-500 m-4">
          <div className="grid grid-cols-3">
            <h1>글 제목</h1>
            <p>작성일, 작성자</p>
            <p>이미지가 있으면 이미지 아이콘</p>
          </div>
          <p>좋아요, 싫어요, 댓글 카운트</p>
        </section>
      </div>

      <AddPostButton />
    </main>
  )
}
