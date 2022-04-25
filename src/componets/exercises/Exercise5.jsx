import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

const MAX_NUM = 3

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise5', {
    maxItemCount: MAX_NUM,
    placeholderValue: `Ingrese ${MAX_NUM} numeros`,
    customAddItemText: 'Solo puede ingresar numeros',
    duplicateItemsAllowed: false,
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} numeros`
    },
    addItemFilter: (value) => {
      return /^(-\d+)?\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const numbersString = choiceInputs[0].getValue(true)
    const numbers = []
    numbersString.forEach(num => {
      numbers.push(parseFloat(num))
    })
    if (numbers.length <= 0) return setRes(null)
    setRes(Math.max(...numbers).toString())
  }

  return (
    <>
      <h1 className='font-bold mb-5 uppercase'>Encuentra El Numero Mayor</h1>
      <input type='text' id='choices-exercise5' />

      <button
        className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Validar Información
      </button>

      <div className='mt-5 rounded-sm py-2 px-5'>
        {res ? <p className='text-xl font-bold'>El numero mayor es: {res}</p> : 'Ingrese los Números'}
      </div>
    </>
  )
}

export default Exercise
