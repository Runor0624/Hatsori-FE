import Link from 'next/link'
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
        귀하에게 이 페이지 접근 권한은 없습니다, 즉시 이전 페이지로
        돌아가십시오.
      </p>
      <Link
        href='/'
        className='text-center text-red-500 font-bold bg-black h-10 py-2 rounded-xl'
      >
        메인 페이지로 돌아가기
      </Link>
    </section>
  )
}