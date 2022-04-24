import useChoiceInput from '../../hooks/useChoiceInput';

const Exercise = () => {
  useChoiceInput('#choices-exercise2', {
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

  return (
    <>
      <input type="text" id="choices-exercise2"/>
    </>
  )
}

export default Exercise
