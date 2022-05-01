import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise6-1', {
    maxItemCount: 1,
    placeholderValue: 'Ingrese su Edad',
    customAddItemText: 'La Edad esta catalogada de 0 a 120 años',
    duplicateItemsAllowed: false,
    maxItemText: (_maxItemCount) => {
      return 'Solo puedes agregar tu edad una vez :('
    },
    addItemFilter: (value) => {
      if (/^\d+$/.test(value)) {
        const num = parseInt(value)
        return num >= 0 && num <= 120
      }
      return false
    }
  })

  useChoiceInput('#choices-exercise6-2', {
    maxItemCount: 1,
    placeholderValue: 'Años Laborados',
    customAddItemText: 'Solo puede Ingresar el numero de años laborados',
    duplicateItemsAllowed: false,
    maxItemText: (_maxItemCount) => {
      return 'Solo puede agregar una vez el numero de años laborados'
    },
    addItemFilter: (value) => {
      if (/^\d+$/.test(value)) {
        const num = parseInt(value)
        return num >= 0 && num <= 120
      }
      return false
    }
  })

  const handleClick = () => {
    const ageString = choiceInputs[0].getValue(true)
    const age = parseInt(ageString[0])

    const yearsString = choiceInputs[1].getValue(true)
    const years = parseInt(yearsString[0])

    if (isNaN(age) || isNaN(years)) return setRes(null)

    if (age >= 60 && years < 25) return setRes('<strong>Adscrito a la jubilación por edad</strong>')
    if (age < 60 && years >= 25) return setRes('<strong>Adscrito a la jubilación por antigüedad Joven</strong>')
    if (age >= 60 && years >= 25) return setRes('<strong>Adscrito a la jubilación por antigüedad Adulta</strong>')
    setRes('<strong>No se encuentra adscrito a ninguna jubilación</strong>')
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Jubilaciones - 1997</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise6-1' />
      <input className='dark:bg-slate-300' type='text' id='choices-exercise6-2' />

      <Button handlerClick={handleClick}>Validar Información</Button>

      <div className='px-5 py-2 mt-5 text-xl rounded-sm'>
        {res
          ? <p dangerouslySetInnerHTML={{
            __html: res
          }}
            />
          : 'Ingresa tu Edad y Años Laborados'}
      </div>
    </>
  )
}

export default Exercise
