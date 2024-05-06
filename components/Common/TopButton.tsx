'use client'
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from 'react'

export default function TopButton() {
  const [isShowBtn, setIsShowBtn] = useState(false)

  const scrolTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 200) {
        setIsShowBtn(true)
      } else {
        setIsShowBtn(false)
      }
    }

    window.addEventListener('scroll', handleShowButton)
    return () => {
      window.removeEventListener('scroll', handleShowButton)
    }
  }, [])

  return (
    <>
      {isShowBtn && (
        <section className='cursor-pointer fixed right-4 bottom-6 bg-white rounded-xl z-20'>
          <FontAwesomeIcon
		  	icon={faArrowUp}
            onClick={scrolTop}
            className='text-center text-xl m-2'
          />
        </section>
      )}
    </>
  )
}