import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './componets/App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-screen h-screen  min-w-full min-h-full'>
      <App />
    </div>
  </React.StrictMode>
)
