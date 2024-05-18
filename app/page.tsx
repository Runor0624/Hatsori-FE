import Nodata from "@/components/Common/Nodata";
import AddPostButton from "@/components/Post/AddPostButton";
import HotPost from "@/components/Post/HotPost";
import NewPost from "@/components/Post/NewPost";
import Link from "next/link";

export const metadata = {
	title: "헛소리",
};
export default function Home() {
  return (
    <main>

      <div className="flex flex-col justify-center items-center m-auto my-2">
        <Link href="/post">
          <HotPost />
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center m-auto">
        <NewPost />
        <Nodata />
      </div>

      <AddPostButton />
    </main>
  )
}
