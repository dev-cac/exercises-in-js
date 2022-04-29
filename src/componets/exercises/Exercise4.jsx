/* import { useState } from 'react' */
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

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
      <h1 className='mb-5 font-mono font-bold uppercase'>Compras de la Empresa</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise4' />

      <Button handlerClick={handleClick}>Validar Información</Button>
    </>
  )
}

export default Exercise
