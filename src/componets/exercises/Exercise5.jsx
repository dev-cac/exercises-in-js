import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const MAX_NUM = 3

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise5', {
    maxItemCount: MAX_NUM,
    placeholderValue: `Ingrese ${MAX_NUM} números`,
    customAddItemText: 'Solo puede ingresar números',
    duplicateItemsAllowed: false,
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} números`
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

      <Button handlerClick={handleClick}>Validar Información</Button>

      <div className='px-5 py-2 mt-5 rounded-sm'>
        {res ? <p className='text-xl font-bold'>El numero mayor es: {res}</p> : 'Ingrese los Números'}
      </div>
    </>
  )
}

export default Exercise
