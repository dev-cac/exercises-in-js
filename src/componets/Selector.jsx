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
        className='border-2 text-xl border-black border-dotted rounded-2xl p-4 bg-yellow-200/20 hover:bg-yellow-200 outline-none md:text-2xl cursor-pointer'
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
