import { Suspense, useEffect, useState, lazy } from 'react'
import { useLocation } from 'wouter'

import Loading from './Loading'

import { exercises } from '@/exercises'

function Menu () {
  const [location, setLocation] = useLocation()
  const [exercise, setExercise] = useState(() => {
    return exercises.find(numExercise => numExercise.id === parseInt(location.split('/')[1]))
  })

  useEffect(() => {
    const findExercise = exercises.find(numExercise => numExercise.id === parseInt(location.split('/')[1]))
    if (!findExercise && location !== '/') return setLocation('/')

    setExercise(findExercise)
  }, [location])

  const ExerciseComponent = lazy(() => import(`./exercises/${exercise.component}.jsx`))

  return (
    <Suspense fallback={<Loading />}>
      {ExerciseComponent ? <ExerciseComponent /> : <Loading />}
    </Suspense>
  )
}

export default Menu
