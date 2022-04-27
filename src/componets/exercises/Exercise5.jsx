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
      <h1 className='mb-5 font-mono font-bold uppercase'>Encuentra El Numero Mayor</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise5' />

      <button
        className='p-4 text-base border-2 border-black border-solid rounded-lg hover:bg-yellow-300' onClick={handleClick}
      >Validar Información
      </button>

      <div className='px-5 py-2 mt-5 rounded-sm'>
        {res ? <p className='text-xl font-bold'>El numero mayor es: {res}</p> : 'Ingrese los Números'}
      </div>
    </>
  )
}

export default Exercise
