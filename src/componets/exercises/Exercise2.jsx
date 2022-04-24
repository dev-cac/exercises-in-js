import useChoiceInput from '../../hooks/useChoiceInput';

const Exercise = () => {
  useChoiceInput('#choices-exercise2', {
    removeItems: true,
    removeItemButton: true,
  });

  return (
    <>
      <input type="text" id="choices-exercise2"/>
    </>
  )
}

export default Exercise
