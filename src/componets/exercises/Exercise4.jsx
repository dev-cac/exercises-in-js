/* import { useState } from 'react' */
import useChoiceInput from '@/hooks/useChoiceInput'

const MAX_PRICES = 1

const Exercise = () => {
  /* const [res, setRes] = useState(null) */

  const { choiceInputs } = useChoiceInput('#choices-exercise4', {
    maxItemCount: MAX_PRICES,
    placeholderValue: 'Ingrese su Saldo',
    customAddItemText: 'Solo puede ingresar su Saldo',
    maxItemText: (maxItemCount) => {
      return 'Solo puedes agregar un saldo'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const notesString = choiceInputs[0].getValue(true)
    const notes = []
    notesString.forEach(note => {
      notes.push(parseFloat(note))
    })
  }

  return (
    <>
      <h1 className='font-bold mb-5 uppercase'>Compras de la Empresa</h1>
      <input type='text' id='choices-exercise4' />

      <button
        className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Validar Información
      </button>
    </>
  )
}

export default Exercise
