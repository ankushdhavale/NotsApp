import { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <Toaster position="top-right"/>
    </Provider>
  </StrictMode>,
)
