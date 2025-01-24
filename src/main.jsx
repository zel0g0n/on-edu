import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './style/style.scss'
import App from './components/app/app'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
