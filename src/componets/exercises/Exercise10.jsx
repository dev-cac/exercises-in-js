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
      <h1 className='font-bold mb-5 uppercase'>Buscando los Números positivos</h1>
      <input type='text' id='choices-exercise10' />

      <button
        className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Encontrar Positivos
      </button>

      <div className='mt-5 rounded-sm py-2 px-5'>
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
