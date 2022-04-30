import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const NUM_COUNT = 2

const Exercise = () => {
  const [res, setRes] = useState([])

  const { choiceInputs } = useChoiceInput('#choices-exercise3', {
    maxItemCount: NUM_COUNT,
    placeholderValue: `Ingresa ${NUM_COUNT} números`,
    customAddItemText: 'Solo puede ingresar números',
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} numeros`
    },
    addItemFilter: (value) => {
      return /^(-\d+)?\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const numberString = choiceInputs[0].getValue(true)
    const numbers = []
    numberString.forEach(note => {
      numbers.push(parseFloat(note))
    })

    numbers.sort((a, b) => a - b)
    setRes(numbers)
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Numeros de Forma Ascendente</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise3' />

      <Button handlerClick={handleClick}>Ordenar Números</Button>

      <div className='w-auto px-5 py-2 mt-5 rounded-sm'>
        <ul className='list-disc text-left'>
          {
            res.length > 0
              ? res.map((num, index) => {
                return <li key={index}>{num}</li>
              })
              : 'Ingrese los numeros'
          }
        </ul>
      </div>
    </>
  )
}

export default Exercise
