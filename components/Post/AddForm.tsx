// 포스트를  추가하는 Form
'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {PostAddTypeinfomation} from '@/Types/type'
import { useRouter } from "next/navigation";
import axios from "axios";
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useAuthStore } from "@/app/util/Zustand/Zustand";
import Image from "next/image";

export default function AddForm() {
	const router = useRouter()
	const { register, handleSubmit, formState: { errors } } = useForm<PostAddTypeinfomation>();
	const [imagePreview, setImagePreview] = useState<string>();

	  const onSubmit = async (data: PostAddTypeinfomation) => {
		const formData = new FormData();
	
		formData.append('userId', String(data.userId));
		formData.append('title', data.title);
		formData.append('description', data.description);
		formData.append('likecount', String(data.likecount))
		formData.append('dislikecount', data.dislikecount)
	   
		if(data.postimage[0]) {
		  formData.append('postimage', data.postimage[0]);
		}
  
		try {
		  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/post/add`, formData);
		  router.push('/')
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

	  const { id } = useAuthStore((state) => ({
		id: Number(state.id)
		}))
	
	/* 텍스트 카운트 */
	const [textTitleLength, setTextTitleLength] = useState(0); {/* title 텍스트 카운트 */}

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(e.target.value.length > 19) {
		  alert('더 이상 입력할 수 없습니다!');
		  window.location.reload();
		  return;
		}
		setTextTitleLength(e.target.value.length); 
	};
  
	const overTitleLimit = textTitleLength > 19;

	const [textDescriptionLength, setTextDescriptionLength] = useState(0); {/* description 텍스트 카운트 */}

	const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if(e.target.value.length > 29) {
		  alert('더 이상 입력할 수 없습니다!');
		  window.location.reload();
		  return;
		}
		setTextDescriptionLength(e.target.value.length); 
	};
  
	const overDescriptionLimit = textDescriptionLength > 299;
	/* 텍스트 카운트 */

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col justify-center items-center min-h-screen w-2/3 lg:w-1/3">
				<h1 className="py-2 text-xl font-bold text-blue-500 dark:text-slate-500">포스트 추가 Form</h1>
		
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">제목</label>
				<input {...register("title", { required: true })} onChange={handleTitleChange} className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="제목을 입력하시오." />
				<p className={`${overTitleLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textTitleLength}/20)</p>
                {errors.title && <p className="text-center text-red-600 font-bold py-2">제목은 필수 값입니다.</p>}

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">본문</label>
				<textarea {...register("description", { required: true })} onChange={handleDescriptionChange} className="w-11/12 h-96 border border-slate-300 rounded-md resize-none" placeholder="본문을 입력하시오." />
				<p className={`${overDescriptionLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textDescriptionLength}/300)</p>
                {errors.description && <p className="text-center text-red-600 font-bold py-2">본문은 필수 값입니다.</p>}

				{id !== 0 &&
				<input {...register("userId", { valueAsNumber: true })} value={id ?? ''} readOnly hidden className="w-11/12 h-8 border border-slate-300 rounded-md my-1"  placeholder="작성하는 사용자 관련 정보를 받는 부분 - Hidden 처리 예정" />
				}

				<input {...register("likecount", { valueAsNumber: true })} value={0} readOnly hidden className="w-11/12 h-8 border border-slate-300 rounded-md my-1"  placeholder="글 좋아요" />
				<input {...register("dislikecount", { required: true })} value={"0"} readOnly hidden className="w-11/12 h-8 border border-slate-300 rounded-md my-1"  placeholder="글 싫어요" />

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">Image</label>
				<input type="file" accept = "image/*" {...register('postimage')} onChange={handleImageSelect} className="file-input w-full max-w-md" />

				{imagePreview && 
					<Image src={imagePreview} width={200} height={200} className="my-2 rounded-lg" alt="User Profile Image Preview" />  
				}
				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit"><FontAwesomeIcon icon={faPlus} className="px-2" />추가</button>
			</form>
		</>
	)
}