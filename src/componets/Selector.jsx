import { useState, useEffect } from 'react'
import { useLocation } from 'wouter'

import useChoiceInput from '@/hooks/useChoiceInput'

import { exercises } from '@/exercises'

function Selector () {
  const { clearChoices } = useChoiceInput()
  const [location, setLocation] = useLocation()

  const [selected, setSelected] = useState(() => {
    let selected = location.split('/')[1]
    selected = selected === '' ? null : selected

    const findExercise = exercises.find(exercise => exercise.id === parseInt(selected))
    if (!findExercise && location !== '/') return setLocation('/')
    return selected || 'default'
  })

  useEffect(() => {
    let selected = location.split('/')[1]
    selected = selected === '' ? null : selected

    setSelected(selected || 'default')
  }, [location])

  const handleSelect = async (e) => {
    const { value } = e.target
    await clearChoices()

    setLocation(`/${value}`)
  }

  return (
    <div>
      <select
        value={selected}
        className='p-4 text-xl border-2 border-black border-dotted outline-none cursor-pointer rounded-2xl bg-yellow-200/20 hover:bg-yellow-200 md:text-2xl dark:bg-slate-500 dark:border-slate-700 dark:text-slate-200'
        name='exercises' onChange={handleSelect}
      >
        <option value='default' hidden disabled>Seleccione un Ejercicio: </option>
        {
          exercises.map(exercice => (
            <option className={location === `/${exercice.id}` ? 'hidden' : ''} key={exercice.id} value={exercice.id}>{exercice.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default Selector
