'use client'
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { NoticeAddTypeinfomation } from "@/Types/type";
import { useAuthStore } from "@/app/util/Zustand/Zustand";

interface DeleteButtonProps {
	item: NoticeAddTypeinfomation; 
}

export default function DeleteNoticeButton(props: DeleteButtonProps) {
  const { authority } = useAuthStore((state) => ({
		authority: state.authority,
	}))

	const { item } = props;

	const handleDelete = async (id:number) => {
        const confirmDelete = confirm("진짜 삭제할건가요?");
        if(confirmDelete) {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/notices/remove/${item.id}`);
          alert("삭제가 완료되었어요!")
		      location.reload()
        } catch (error) {
          console.error(error);
        }
      }
      }

	return (
		<>
    {authority === `${process.env.NEXT_PUBLIC_ADMIN}` && (
		    <button
          	onClick={() => handleDelete(item.id)}
            className="btn btn-neutral cursor-pointer m-2"
        	>
          <FontAwesomeIcon icon={faX} className="px-2" /> 삭제
        </button>
    )}
		</>
	)
}