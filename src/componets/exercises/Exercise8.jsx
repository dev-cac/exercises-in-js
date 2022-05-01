import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise8', {
    maxItemCount: 1,
    placeholderValue: 'Ingrese el número de Hectáreas',
    customAddItemText: 'No coincide con un número de Hectáreas',
    duplicateItemsAllowed: false,
    maxItemText: (_maxItemCount) => {
      return 'Solo puede ingresar un número de Hectáreas'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const hectString = choiceInputs[0].getValue(true)
    const hect = parseFloat(hectString[0])

    const metros = hect * 10000
    const pinos = (metros * 8) / 10
    const oyameles = (metros * 15) / 15
    const cedros = (metros * 10) / 18

    setRes(
      `<strong>${parseInt(pinos)}</strong> pino(s) <br/>
      <strong>${parseInt(oyameles)}</strong> oyamel(es) <br/>
      <strong>${parseInt(cedros)}</strong> cedro(s)`
    )
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Hora de Sembrar</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise8' />
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
