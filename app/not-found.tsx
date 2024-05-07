import Link from 'next/link'
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const metadata = {
	title: "Error!",
};

export default function Notfound() {
  return (
    <section className='m-auto flex flex-col justify-center w-1/2 min-h-screen'>
      <h1 className='text-center text-4xl text-red-600 font-bold py-4'>
        Error Page
      </h1>
      <p className='text-center text-xl text-red-500 font-bold underline py-6'>
        접근 권한이 없습니다, 이전 페이지로
        돌아가십시오.
      </p>
      <Link
        href='/'
        className='text-center text-red-500 font-bold bg-black h-10 py-2 rounded-xl'
      >
        <FontAwesomeIcon icon={faRotateRight} className='px-2' />메인 페이지로 돌아가기
      </Link>
    </section>
  )
}