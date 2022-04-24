import { Suspense, useEffect, useState, lazy } from 'react';
import { useLocation } from 'wouter'

import { exercises } from '../exercises'

function Menu () {
  const [location,] = useLocation()
  const [exercise, setExercise] = useState(() => {
    return exercises.find(numExercise => numExercise.id === parseInt(location.split('/')[1]))
  })

  useEffect(() => {
    const findExercise = exercises.find(numExercise => numExercise.id === parseInt(location.split('/')[1]))
    setExercise(findExercise)
  }, [location])

  const ExerciseComponent = lazy(() => import(`./exercises/${exercise.component}.jsx`))

  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ExerciseComponent />
    </Suspense>
  )
}

export default Menu
