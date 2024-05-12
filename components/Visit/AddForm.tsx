// 방명록을 추가하는 Form
'use client'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import axios from 'axios'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { VisitTypeinfomation } from "@/Types/type";

export default function AddForm() {
	const router = useRouter()
	const { register, handleSubmit, formState: { errors } } = useForm<VisitTypeinfomation>();
    const onSubmit = async (data:VisitTypeinfomation) => {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/visit`,data)
          if (response.data) {
            alert('OK!')
			router.push('/')
          } else {
            alert('Error2!')
          }
        } catch (err) {
          alert('Error!')
        }
      };

	  /* 텍스트 카운트 */
		const [textLength, setTextLength] = useState(0); {/* Title 텍스트 카운트 */}

		const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			if(e.target.value.length > 19) {
			alert('더 이상 입력할 수 없습니다!');
			window.location.reload();
			return;
			}
			setTextLength(e.target.value.length); 
		};
	
		const overLimit = textLength > 19;

		const [textDescriptionLength, setTextDescriptionLength] = useState(0); {/* Description 텍스트 카운트 */}

		const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
			if(e.target.value.length > 299) {
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
			<form onSubmit={handleSubmit(onSubmit)} className="m-auto flex flex-col justify-center items-center border border-blue-500 rounded-md min-h-screen w-2/3 lg:w-1/3">
				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">제목</label>
				<input {...register("title", { required: true })} onChange={handleTitleChange} className="w-11/12 h-8 border border-slate-300 rounded-md" placeholder="제목을 입력하시오." />
				<p className={`${overLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textLength}/20)</p>

				<label className="font-bold p-2 text-blue-500 dark:text-slate-500">본문</label>
				<textarea {...register("description", { required: true })} onChange={handleDescriptionChange} className="w-11/12 h-96 border border-slate-300 rounded-md resize-none" placeholder="본문을 입력하시오." />
				<p className={`${overDescriptionLimit ? 'text-red-500 font-bold' : 'text-white font-bold'}`}>Count : ({textDescriptionLength}/300)</p>

				<button className="btn btn-neutral cursor-pointer m-2 w-11/12" type="submit"><FontAwesomeIcon icon={faPlus} className="px-2" />추가</button>
			</form>
		</>
	)
}