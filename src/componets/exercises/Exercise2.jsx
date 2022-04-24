import useChoiceInput from '../../hooks/useChoiceInput';

const Exercise = () => {
  const { choiceInputs } = useChoiceInput('#choices-exercise2', {
    removeItems: true,
    removeItemButton: true,
    maxItemCount: 3,
    placeholderValue: "Ingresa 3 numeros",
    loadingText: 'Cargando...',
    customAddItemText: 'Solo puede ingresar numeros',
    addItemText: (value) => {
      return `Presiona Enter para agregar <b>"${value}"</b>`;
    },
    maxItemText: (maxItemCount) => {
      return `Solo puedes agregar ${maxItemCount} valores`;
    },
    addItemFilter: (value) => {
      return /^[0-9]*(\.?)[0-9]+$/.test(value)
    }
  });

  const handleClick = () => {
    console.log(choiceInputs[0].getValue(true));
  }

  return (
    <>
      <input type="text" id="choices-exercise2"/>
      <button
        className='rounded-lg border-2 p-4 border-solid border-black hover:bg-yellow-300'
        onClick={handleClick}
      >Click Aqui</button>
    </>
  )
}

export default Exercise
