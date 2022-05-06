import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const numberToCurrency = (number) => number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise1-1', {
    maxItemCount: 1,
    placeholderValue: 'Capital en Inversión',
    customAddItemText: 'Solo puede ingresar un capital en Invertir',
    maxItemText: (_maxItemCount) => {
      return 'Solo puedes ingresar el Capital en Invertir'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  useChoiceInput('#choices-exercise1-2', {
    maxItemCount: 1,
    placeholderValue: 'Tasa de Interés',
    customAddItemText: 'Solo puede ingresar una Tasa de Interés',
    maxItemText: (_maxItemCount) => {
      return 'Solo puedes ingresar la Tasa de Interés'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const capitalString = choiceInputs[0].getValue(true)
    const capital = parseFloat(capitalString[0])

    const tasaString = choiceInputs[1].getValue(true)
    const tasa = parseFloat(tasaString[0])

    const gains = capital * (tasa / 100)

    if (isNaN(gains) || isNaN(capital) || isNaN(tasa)) return setRes(null)

    if (gains > 5000000) {
      setRes(
        `Ganancias: <strong>${numberToCurrency(gains)}</strong> <br />
        Su capital Final es de: <strong>${numberToCurrency(capital + gains)}</strong>`
      )
    } else {
      setRes(
        `Su capital Final es de: <strong>${numberToCurrency(capital)}</strong><br />
        No supera el monto mínimo de 5.000.000 en ganancias`
      )
    }
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Buscando Inversiones</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise1-1' />
      <input className='dark:bg-slate-300' type='text' id='choices-exercise1-2' />

      <Button handlerClick={handleClick}>Calcular Ganancias</Button>

      <div className='px-5 py-2 mt-5 text-xl rounded-sm'>
        {res
          ? <p dangerouslySetInnerHTML={{
            __html: res
          }}
            />
          : 'Ingresa tu Capital en Inversión y Tasa de Interés'}
      </div>
    </>
  )
}

export default Exercise
