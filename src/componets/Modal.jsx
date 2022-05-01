import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'

import { exercises } from '@/exercises'

const Modal = ({ isOpen, setIsOpen }) => {
  const [location, setLocation] = useLocation()

  const findExercise = (id) => exercises.find(exerci => exerci.id === parseInt(id))

  const [exercise, setExercise] = useState(() => {
    return findExercise(location.split('/')[1])
  })

  useEffect(() => {
    const isFindExercise = findExercise(location.split('/')[1])
    if (!isFindExercise && location !== '/') return setLocation('/')

    setExercise(isFindExercise)
  }, [location])

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  const newContent = exercise.description || 'No Tiene Descripción'

  return (
    <>
      <svg onClick={handleModal} className='absolute top-1 left-1 z-40 hover:fill-slate-600 cursor-pointer' clipRule='evenodd' width='25px' fillRule='evenodd' strokeLinejoin='round' strokeMiterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 8c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z' fillRule='nonzero' /></svg>

      {
        isOpen && (
          <div
            className='absolute z-50 top-0 backdrop-blur-sm left-0 w-full h-full bg-black/80 text-white overflow-auto'
            onClick={() => setIsOpen(false)}
          >
            <div className='h-full flex items-center'>
              <div className='w-5/6 m-auto flex flex-col items-center justify-center' dangerouslySetInnerHTML={{ __html: newContent }} />
            </div>
          </div>
        )
      }
    </>
  )
}

export default Modal
