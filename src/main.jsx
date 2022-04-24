import React from 'react'
import ReactDOM from 'react-dom/client'

import { ChoicesContextProvider } from './context/choiceContext'

import App from './componets/App'

import 'choices.js/public/assets/styles/base.min.css'
import 'choices.js/public/assets/styles/choices.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChoicesContextProvider>
      <div className='w-full h-full text-black'>
        <App />
      </div>
    </ChoicesContextProvider>
  </React.StrictMode>
)
