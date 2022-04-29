import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const MAX_NUM = 1

const Exercise = () => {
  const [res, setRes] = useState(null)
  const [gender, setGender] = useState('')

  const { choiceInputs } = useChoiceInput('#choices-exercise7', {
    maxItemCount: MAX_NUM,
    placeholderValue: 'Ingrese su Edad',
    customAddItemText: 'La Edad esta catalogada de 0 a 120 años',
    duplicateItemsAllowed: false,
    maxItemText: (_maxItemCount) => {
      return 'Solo puedes agregar su edad una vez :('
    },
    addItemFilter: (value) => {
      if (/^\d+$/.test(value)) {
        const num = parseInt(value)
        return num >= 0 && num <= 120
      }
      return false
    }
  })

  const handleChange = (e) => {
    setGender(e.target.value)
  }

  const handleClick = () => {
    const ageString = choiceInputs[0].getValue(true)
    const age = parseInt(ageString[0])

    if (gender === '') return
    if (gender === 'male') return setRes((210 - age) / 10)
    setRes((220 - age) / 10)
  }

  return (
    <>
      <h1 className='font-mono font-bold uppercase'>Calcula tu número de Pulsaciones</h1>
      <p className='mb-5 text-sm'>por cada <strong>10 segundos</strong> de Ejercicio Aerobico</p>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise7' />

      <span className='font-bold'>Genero:</span>

      <div className='flex flex-col justify-center w-auto'>
        <div className='flex flex-row items-center justify-start m-0'>
          <input type='radio' className='accent-yellow-300 dark:accent-slate-900' onChange={handleChange} id='male' name='gener' value='male' />
          <label htmlFor='male' className='p-0 m-0 ml-2'>Hombre</label>
        </div>

        <div className='flex flex-row items-center justify-start m-0 mb-5'>
          <input type='radio' className='accent-yellow-300 dark:accent-slate-900' onChange={handleChange} id='female' name='gener' value='female' />
          <label htmlFor='female' className='p-0 m-0 ml-2'>Mujer</label>
        </div>
      </div>

      <Button handlerClick={handleClick}>Calcular Pulsaciones</Button>

      <div className='px-5 py-2 mt-5 text-xl rounded-sm'>
        {res ? <p className='font-bold'>Número de Pulsaciones: {res}</p> : 'Ingrese su Edad y Genero'}
      </div>
    </>
  )
}

export default Exercise
