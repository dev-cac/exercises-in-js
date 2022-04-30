import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

import Button from '@/componets/Button'

const MAX_PRICES = 1

const numberToCurrency = (number) => number.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise4', {
    maxItemCount: MAX_PRICES,
    placeholderValue: 'Ingrese el precio de su Compra',
    customAddItemText: 'Solo puede ingresar un precio',
    maxItemText: (_maxItemCount) => {
      return 'Solo puedes agregar un saldo'
    },
    addItemFilter: (value) => {
      return /^\d*(\.\d+)?$/.test(value)
    }
  })

  const handleClick = () => {
    const priceString = choiceInputs[0].getValue(true)
    const price = parseFloat(priceString[0])

    let percentInvest = 0; let percentLoan = 0; let credit = 0

    if (price >= 500000) {
      percentInvest = (price * 55) / 100
      percentLoan = (price * 30) / 100
      credit = price - (percentInvest + percentLoan)
    } else {
      percentInvest = (price * 70) / 100
      credit = (price * 30) / 100
    }

    setRes(
      `Inversion de la Empresa: <strong>${numberToCurrency(percentInvest)}</strong><br>
      Crédito: <strong>${numberToCurrency(credit)}</strong><br>
      Prestamo al Banco: <strong>${numberToCurrency(percentLoan)}</strong><br><br>
      Intereses por Credito: <strong>${numberToCurrency((credit * 20) / 100)}</strong><br>`
    )
  }

  return (
    <>
      <h1 className='mb-5 font-mono font-bold uppercase'>Compras de la Empresa</h1>
      <input className='dark:bg-slate-300' type='text' id='choices-exercise4' />

      <Button handlerClick={handleClick}>Validar Información</Button>

      <div className='px-5 py-2 mt-5 text-xl rounded-sm'>
        {res
          ? <p
              dangerouslySetInnerHTML={{
                __html: res
              }}
            />
          : 'Ingrese su Precio'}
      </div>
    </>
  )
}

export default Exercise
