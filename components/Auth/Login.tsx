'use client'
import { useAuthStore } from '@/app/util/Zustand/Zustand'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

interface LoginType {
	userId: string
	password: string
}
export default function LoginForm () {
	const router = useRouter()
    const { login } = useAuthStore()

    const { register, handleSubmit, control, formState: { errors } } = useForm<LoginType>()
      const onSubmit = async (data: LoginType) => {
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/login`,
            data,
          )
          login({
            id: response.data.id,
            userId: response.data.userId,
            authority: response.data.authority,
            nickname: response.data.nickname
          })
          router.push('/')
        } catch (err: any) {
          alert('로그인 실패')
        }
      }
	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">로그인 Form</h1>
				<p className="py-2 font-bold text-blue-500 dark:text-slate-500">투입 항목 : ID, PW</p>
				{/* React-Hook-Form으로 데이터 입력이 안될 경우 에러 텍스트 출력 */}
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">ID</label>
				<input {...register("userId", { required: true })} className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="가입한 ID를 입력하시오." />
                {errors.userId && <p className="text-center text-red-600 font-bold py-2">User ID는 필수 값입니다.</p>}

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Password</label>
				<input {...register("password", { required: true })}  className="w-11/12 h-8 border border-slate-300 rounded-md" type="password" placeholder="가입한 Password를 입력하시오." />
                {errors.password && <p className="text-center text-red-600 font-bold py-2">Password는 필수 값입니다.</p>}

				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit">로그인</button>
			</form>
		</>
	)
}