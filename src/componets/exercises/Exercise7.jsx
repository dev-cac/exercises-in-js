import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

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
      <h1 className='font-bold mb-2 uppercase'>Calcula tu número de Pulsaciones</h1>
      <p className='mb-5 text-sm'>por cada <strong>10 segundos</strong> de Ejercicio Aerobico</p>
      <input type='text' id='choices-exercise7' />

      <span className='font-bold'>Genero:</span>

      <div className='w-auto flex flex-col justify-center'>
        <div className='flex flex-row items-center justify-start m-0'>
          <input type='radio' className='accent-yellow-300' onChange={handleChange} id='male' name='gener' value='male' />
          <label htmlFor='male' className='m-0 p-0 ml-2'>Hombre</label>
        </div>

        <div className='flex flex-row items-center justify-start m-0 mb-5'>
          <input type='radio' className='accent-yellow-300' onChange={handleChange} id='female' name='gener' value='female' />
          <label htmlFor='female' className='m-0 p-0 ml-2'>Mujer</label>
        </div>
      </div>

      <button
        className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Calcular Pulsaciones
      </button>

      <div className='mt-5 text-xl rounded-sm py-2 px-5'>
        {res ? <p className='font-bold'>Número de Pulsaciones: {res}</p> : 'Ingrese su Edad y Genero'}
      </div>
    </>
  )
}

export default Exercise
