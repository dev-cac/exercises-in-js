import { useEffect, useContext } from 'react'
import Choices from 'choices.js'

import ChoiceContext from '../context/choiceContext'

const DEFAULT_OPTIONS = {
  allowHTML: true,
}

const useChoiceInput = (elementNewChoise, optionsChoice = {}) => {
  const { choiceInputs, setChoiceInputs } = useContext(ChoiceContext)

  useEffect(() => {
    if (!elementNewChoise) return

    const newChoice = new Choices(elementNewChoise, {
      ...DEFAULT_OPTIONS,
      ...optionsChoice,
    })

    setChoiceInputs((choices) => {
      return [...choices, newChoice]
    })

    return () => {
      newChoice.destroy()
      setChoiceInputs((choices) => {
        return choices.filter((choice) => choice !== newChoice)
      })
    }
  }, [])

  const clearChoices = async () => {
    await choiceInputs.forEach(choice => choice.destroy())
    setChoiceInputs([])
  }

  return {
    choiceInputs,
    clearChoices,
  }
}

export default useChoiceInput
