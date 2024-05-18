import DetailPost from "@/components/Post/DetailPost"
import { Metadata } from 'next'
import {PostTypeinfomation} from '@/Types/type'

// 글의 상세페이지
export async function generateMetadata({
	params,
  }: any): Promise<Metadata> {
	const res = await fetch(
	  `${process.env.NEXT_PUBLIC_API_URL}/post/detail/${params.id}`
	);
	const data = (await res.json()) as PostTypeinfomation;
	return { title: data.title };
  }

export default function page () {
	return (
		<>
			<DetailPost />
		</>
	)
}