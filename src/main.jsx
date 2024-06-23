import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { ThemeProviderComponent } from './Components/themeComponent.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProviderComponent>
    <App />
    </ThemeProviderComponent>
  </React.StrictMode>,
)
