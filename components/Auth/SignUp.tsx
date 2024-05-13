'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface SignUpTypes {
	userId: string
	nickname: string
	password: string
	authority: string
	userprofileimage: string | File | null
}
export default function SignUpForm () {
	const router = useRouter()

	/* 회원가입 관련 부분 */
	const { register, handleSubmit, formState: { errors } } = useForm<SignUpTypes>();
	const [imagePreview, setImagePreview] = useState<string>();
  
	const onSubmit = async (data: SignUpTypes) => {
	  const formData = new FormData();
  
	  formData.append('userId', data.userId);
	  formData.append('password', data.password);
	  formData.append('nickname', data.nickname);
	  formData.append('authority', data.authority)
	  
	  if(data.userprofileimage) {
		formData.append('userprofileimage', data.userprofileimage);
	  }
  
	  try {
		const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/signup`, formData);
		alert("회원가입을 환영합니다!")
		router.push('/login')
	  } catch(error) {
		console.log(error);
	  }
	}

	const handleImageSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		
		if(file) {
		  setImagePreview(URL.createObjectURL(file));
		}
	  }
	/* 회원가입 관련 부분 */
	/* 텍스트 카운트 */
	const [textUserIDLength, setTextUserIDLength] = useState(0); {/* UserId 텍스트 카운트 */}

	const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value.length > 19) {
		  alert('더 이상 입력할 수 없습니다!');
		  window.location.reload();
		  return;
		}
		setTextUserIDLength(e.target.value.length); 
	};
  
	const overUserIDLimit = textUserIDLength > 19;

	const [textNicknameLength, setTextNicknameLength] = useState(0); {/* Nickname 텍스트 카운트 */}

	const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value.length > 29) {
		  alert('더 이상 입력할 수 없습니다!');
		  window.location.reload();
		  return;
		}
		setTextNicknameLength(e.target.value.length); 
	};
  
	const overNicknameLimit = textNicknameLength > 29;
	/* 텍스트 카운트 */

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">회원가입 Form</h1>
				{/* React-Hook-Form으로 데이터 입력이 안될 경우 에러 텍스트 출력 */}
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">ID</label>
				<input {...register('userId' , {required: true})} onChange={handleUserIdChange} className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="사용할 ID를 입력하시오." />
                {errors.userId && <p className="text-center text-red-600 font-bold py-2">User ID는 필수 값입니다.</p>}
				<p className={`${overUserIDLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textUserIDLength}/20)</p>

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Password</label>
				<input  {...register('password', {required: true})} className="w-11/12 h-8 border border-slate-300 rounded-md" type="password" placeholder="사용할 Password를 입력하시오." />
                {errors.password && <p className="text-center text-red-600 font-bold py-2">Password는 필수 값입니다.</p>}

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Nickname</label>
				<input  {...register('nickname', {required: true})} onChange={handleNicknameChange} className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="사용할 NickName를 입력하시오." />
                {errors.nickname && <p className="text-center text-red-600 font-bold py-2">Nickname는 필수 값입니다.</p>}
				<p className={`${overNicknameLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textNicknameLength}/30)</p>

				<input  {...register('authority', {required: true})} value={"User"} hidden className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="사용할 권한을 입력하시오." />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Profile Image</label>
				<input type="file" {...register('userprofileimage')} onChange={handleImageSelect}  className="file-input w-full max-w-md" />

				{imagePreview && 
					<Image src={imagePreview} width={200} height={200} className="my-2 rounded-lg" alt="User Profile Image Preview" />  
				}

				<button className="btn btn-neutral m-2 w-11/12" type="submit"><FontAwesomeIcon icon={faPlus} className="px-2" />회원가입</button>
				{/* 이 부분은 이미지를 제외한 모든 값에 입력값이 들어가면 활성화 하거나, 조건부 렌더링으로 보여지도록? */}
			</form>
		</>
	)
}