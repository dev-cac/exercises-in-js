import { Suspense, useEffect, useState, lazy } from 'react'
import { useLocation } from 'wouter'

import Modal from './Modal'
import Loading from './Loading'

import { exercises } from '@/exercises'

function Menu () {
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

  const ExerciseComponent = lazy(() => import(`./exercises/${exercise.component}.jsx`))

  return (
    <Suspense fallback={<Loading />}>
      <Modal />
      <ExerciseComponent />
    </Suspense>
  )
}

export default Menu
