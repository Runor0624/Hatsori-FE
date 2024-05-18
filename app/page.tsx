import Nodata from "@/components/Common/Nodata";
import AddPostButton from "@/components/Post/AddPostButton";
import HotPost from "@/components/Post/HotPost";
import PostList from "@/components/Post/PostList";
import Link from "next/link";

export const metadata = {
	title: "헛소리",
};
export default function Home() {
  return (
    <main>

      <HotPost />
      <PostList />


      <AddPostButton />
    </main>
  )
}
