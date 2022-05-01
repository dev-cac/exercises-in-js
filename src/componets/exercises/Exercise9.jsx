import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const numberToCurrency = (number) => number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise9', {
    maxItemCount: 1,
    placeholderValue: 'Capital actual',
    customAddItemText: 'Solo puede ingresar un monto valido',
    maxItemText: (_maxItemCount) => {
      return 'Solo puede ingresar un monto'
    },
    addItemFilter: (value) => {
      return /^(-\d+)?\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const capitalString = choiceInputs[0].getValue(true)
    const capital = parseFloat(capitalString[0])
    let newCapital; let prestm = 0

    if (isNaN(capital)) return setRes(null)

    if (capital < 0) {
      prestm = 10000000 - capital
      newCapital = 10000000
    } else if (capital <= 20000000) {
      prestm = 20000000 - capital
      newCapital = 20000000
    } else {
      newCapital = capital
    }

    const withOutGast = newCapital - 5000000 - 2000000
    setRes(`
      Su nuevo Capital es: <strong>${numberToCurrency(newCapital)}</strong> <br /><br />
      <strong>${numberToCurrency(5000000)}</strong> para equipos de cómputo.<br />
      <strong>${numberToCurrency(2000000)}</strong> para mobiliario.<br />
      <strong>${numberToCurrency(withOutGast / 2)}</strong> para insumos. <br />
      <strong>${numberToCurrency(withOutGast / 2)}</strong> para incentivos al personal.<br /> <br />
      Prestamo del Banco: <strong>${numberToCurrency(prestm)}</strong>
    `)
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Prestamos al Banco</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise9' />
      <Button handlerClick={handleClick}>Buscar Prestamo</Button>

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
