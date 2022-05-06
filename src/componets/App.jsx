import { useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'wouter'

import useChoiceInput from '@/hooks/useChoiceInput'
import useDarkMode from '@/hooks/useDarkMode'

import Menu from './Menu'
import Selector from './Selector'

function App () {
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { clearChoices } = useChoiceInput()
  const [, setLocation] = useLocation()

  const [isOpenModal, setIsOpen] = useState(false)

  useEffect(() => {
    const classList = document.documentElement.classList
    darkMode === 'dark' ? classList.add('theme--night') : classList.remove('theme--night')
  }, [darkMode])

  const toHome = async (e) => {
    e.preventDefault()

    await clearChoices()
    setLocation('/')
  }

  return (
    <div className='flex flex-col items-center w-full h-full'>
      <button className='p-5 absolute rounded-r-full left-0 top-5 bg-white/60 dark:bg-slate-800 z-10' onClick={toggleDarkMode}>
        <div className='relative'>
          <div className='theme-toggle theme-toggle-js'>
            <span className='moon' />
            <span className='sun' />
            <small className='sun__ray' />
            <small className='sun__ray' />
            <small className='sun__ray' />
            <small className='sun__ray' />
            <small className='sun__ray' />
            <small className='sun__ray' />
          </div>
        </div>

      </button>

      <a href='/' onClick={toHome}>
        <img className='w-16 h-16 mt-4 mb-4 font-bold border-2 border-black border-dashed rounded cursor-pointer hover:border-yellow-500 dark:border-slate-200' src='/logo.svg' alt='Logo' />
      </a>

      <Selector />

      <div className={
        `w-11/12 h-[60%] relative text-xl p-5 bg-white rounded-2xl overflow-x-hidden ${
          isOpenModal ? 'overflow-y-hidden' : 'overflow-y-auto'
        } border-2 border-black border-dotted mt-5 md:w-4/5 md:text-2xl dark:bg-slate-300`
        }
      >
        <div className='flex flex-col items-center justify-center w-full h-auto min-h-full text-center break-words'>
          <Switch>
            <Route path='/'>
              <header className='text-center'>
                <h1 className='font-mono text-4xl font-bold md:text-6xl'>Ejercicios de Algoritmia</h1>
                <h2 className='font-mono text-2xl font-medium md:text-4xl'>
                  Resueltos con <span className='font-bold md:font-semibold'>JavaScript</span>
                </h2>
              </header>
            </Route>

            <Route path='/:all'>
              <Menu isOpenModal={isOpenModal} setIsOpen={setIsOpen} />
            </Route>
          </Switch>
        </div>
      </div>

      <footer className='mt-5 text-center dark:text-slate-200'>
        Hecho con <span className='font-bold text-red-700 dark:text-red-300'>♡</span> por <span className='font-bold'>Luis Osorio</span> y <span className='font-bold'>Bryan Muñoz</span><br />
        <p className='font-bold text-gray-800 dark:text-slate-400'>Copyright &copy; 2022</p>
      </footer>
    </div>
  )
}

export default App
