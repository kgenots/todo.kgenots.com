import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from '@/App'
import { ReduxProvider } from '@/redux/provider'

import '@/assets/scss/style.scss'

import config from '@/config'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <StrictMode>
    <ReduxProvider>
      <BrowserRouter basename={config.basename}>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </StrictMode>,
)
