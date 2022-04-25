import { useState } from 'react'
import useChoiceInput from '@/hooks/useChoiceInput'

const NUM_NOTES = 3

const Exercise = () => {
  const [res, setRes] = useState(null)

  const { choiceInputs } = useChoiceInput('#choices-exercise2', {
    maxItemCount: NUM_NOTES,
    placeholderValue: `Ingresa tus ${NUM_NOTES} notas`,
    customAddItemText: 'Solo puede ingresar notas de 0 a 5',
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} notas`
    },
    addItemFilter: (value) => {
      if (/^-?\d*(\.\d+)?$/.test(value)) {
        const num = parseFloat(value)
        return num >= 0 && num <= 5
      }
      return false
    }
  })

  const handleClick = () => {
    const notesString = choiceInputs[0].getValue(true)
    const notes = []
    notesString.forEach(note => {
      notes.push(parseFloat(note))
    })

    const average = notes.reduce((acc, curr) => acc + curr, 0) / NUM_NOTES
    setRes(average ? average.toFixed(2).toString() : null)
  }

  const resStyles = `mt-5 rounded-sm ${res >= 3.5 || !res ? 'bg-green-500' : 'bg-red-400'} py-2 px-5 text-white`
  const resText = res
    ? res >= 3.5 ? `Aprobado | Nota: ${res}` : `Reprobado | Nota: ${res}`
    : 'Ingresa tus notas :D'

  return (
    <>
      <h1 className='font-bold mb-5 uppercase'>Calcula tu Promedio</h1>
      <input type='text' id='choices-exercise2' />

      <button
        className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Calcular Nota Final
      </button>

      <div className={resStyles}>
        {resText || 'Ingresa tus notas :D'}
      </div>
    </>
  )
}

export default Exercise
