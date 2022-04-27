import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

const MAX_NUM = 10

const Exercise = () => {
  const [res, setRes] = useState([])

  const { choiceInputs } = useChoiceInput('#choices-exercise10', {
    maxItemCount: MAX_NUM,
    placeholderValue: `Ingrese ${MAX_NUM} numeros`,
    customAddItemText: 'Solo puede ingresar numeros',
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

    const positiveNumbers = numbers.filter(num => num > 0)
    setRes(positiveNumbers)
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase dark:bg-slate-300'>Buscando los Números positivos</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise10' />

      <button
        className='p-4 text-base border-2 border-black border-solid rounded-lg hover:bg-yellow-300' onClick={handleClick}
      >Encontrar Positivos
      </button>

      <div className='px-5 py-2 mt-5 rounded-sm'>
        <ul className='list-disc'>
          {
            res.length > 0
              ? res.map((num, index) => {
                return <li key={index}>{num}</li>
              })
              : 'Ingrese los números'
          }
        </ul>
      </div>
    </>
  )
}

export default Exercise
