import { useState } from 'react'
import useChoiceInput from '../../hooks/useChoiceInput';

const NUM_COUNT = 2

const Exercise = () => {
  const [res, setRes] = useState([]);

  const { choiceInputs } = useChoiceInput('#choices-exercise3', {
    maxItemCount: NUM_COUNT,
    placeholderValue: `Ingresa ${NUM_COUNT} números`,
    customAddItemText: 'Solo puede ingresar números',
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} numeros`;
    },
    addItemFilter: (value) => {
      return /^-?\d*(\.\d+)?$/.test(value)
    }
  });

  const handleClick = () => {
    const numberString = choiceInputs[0].getValue(true)
    const numbers = []
    numberString.forEach(note => {
      numbers.push(parseFloat(note))
    })

    numbers.sort((a, b) => a - b)
    setRes(numbers)
  }

  return (
    <>
      <h1 className='font-bold mb-5 uppercase'>Numeros de Forma Ascendente</h1>
      <input type="text" id="choices-exercise3"/>

      <button className='rounded-lg text-base border-2 p-4 border-solid border-black hover:bg-yellow-300' onClick={handleClick}
      >Ordenar</button>

      <div className="mt-5 rounded-sm py-2 px-5">
        <ul class="list-disc">
          {
            res.length > 0 ? res.map((num, index) => {
              return <li key={index}>{num}</li>
            })
            : 'Ingrese los numeros'
          }
        </ul>
      </div>
    </>
  )
}

export default Exercise
