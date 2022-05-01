import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const SETTINGS = {
  maxItemCount: 1,
  customAddItemText: 'No coincide con un número valido',
  duplicateItemsAllowed: false,
  maxItemText: (_maxItemCount) => {
    return 'Solo puede ingresar un número'
  },
  addItemFilter: (value) => {
    if (/^\d+$/.test(value)) {
      const num = parseInt(value)
      return num >= 0 && num <= 100
    }
    return false
  }
}

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise8-1', {
    maxItemCount: 1,
    placeholderValue: 'Número de Hectáreas',
    customAddItemText: 'No coincide con un número de Hectáreas',
    duplicateItemsAllowed: false,
    maxItemText: (_maxItemCount) => {
      return 'Solo puede ingresar un número de Hectáreas'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  useChoiceInput('#choices-exercise8-2', {
    placeholderValue: 'Porcentaje de Pinos',
    ...SETTINGS
  })

  useChoiceInput('#choices-exercise8-3', {
    placeholderValue: 'Porcentaje de Oyamales',
    ...SETTINGS
  })

  useChoiceInput('#choices-exercise8-4', {
    placeholderValue: 'Porcentaje de Cedros',
    ...SETTINGS
  })

  const handleClick = () => {
    const hectString = choiceInputs[0].getValue(true)
    const hect = parseFloat(hectString[0])

    const pPino = parseFloat(choiceInputs[1].getValue(true)[0])
    const pOyamales = parseFloat(choiceInputs[2].getValue(true)[0])
    const pCedros = parseFloat(choiceInputs[3].getValue(true)[0])

    const pTotal = pPino + pOyamales + pCedros
    if (pTotal !== 100) return setRes(`El porcentaje total debe ser 100%, actualmente es ${pTotal || 0}%`)

    if (isNaN(hect)) return setRes(null)

    const metros = hect * 10000

    const metrosPino = metros * pPino / 100
    const metrosOyamales = metros * pOyamales / 100
    const metrosCedros = metros * pCedros / 100

    const pinos = (metrosPino * 8) / 10
    const oyameles = (metrosOyamales * 15) / 15
    const cedros = (metrosCedros * 10) / 18

    setRes(
      `
      Quedarian divididos de la siguiente manera:<br/><br/>
      <strong>${parseInt(pinos)}</strong> pinos <br/>
      <strong>${parseInt(oyameles)}</strong> oyameles <br/>
      <strong>${parseInt(cedros)}</strong> cedros`
    )
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Hora de Sembrar</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise8-1' />

      <input className='dark:bg-slate-300' type='text' id='choices-exercise8-2' />
      <input className='dark:bg-slate-300' type='text' id='choices-exercise8-3' />
      <input className='dark:bg-slate-300' type='text' id='choices-exercise8-4' />
      <Button handlerClick={handleClick}>Calcular Pulsaciones</Button>

      <div className='px-5 py-2 mt-5 text-xl rounded-sm'>
        {res
          ? <p dangerouslySetInnerHTML={{
            __html: res
          }}
            />
          : 'Ingresa el número de Hectáreas'}
      </div>
    </>
  )
}

export default Exercise
