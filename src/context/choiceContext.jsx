import { useState, createContext } from 'react'

const Context = createContext({
  choiceInputs: {},
  setChoiceInputs: () => {}
})

export const ChoicesContextProvider = ({ children }) => {
  const [choiceInputs, setChoiceInputs] = useState([])

  return (
    <Context.Provider value={{ choiceInputs, setChoiceInputs }}>
      {children}
    </Context.Provider>
  )
}

export default Context
