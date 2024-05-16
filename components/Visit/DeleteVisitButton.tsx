'use client'
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import { VisitTypeinfomation } from "@/Types/type";
import { useAuthStore } from "@/app/util/Zustand/Zustand";

interface DeleteButtonProps {
	item: VisitTypeinfomation; 
}

export default function DeleteVisitButton(props: DeleteButtonProps) {
	const { item } = props;
  const { authority } = useAuthStore((state) => ({
		authority: state.authority,
	}))

	const handleDelete = async (id:number) => {
        const confirmDelete = confirm("진짜 삭제할건가요?");
        if(confirmDelete) {
        try {
          await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/visit/remove/${item.id}`);
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
        	>
          <FontAwesomeIcon icon={faX} className="px-2" /> 삭제
        </button>
    )}
		</>
	)
}