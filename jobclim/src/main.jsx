import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './globalStyle'
import Router from './router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <Router />
  </React.StrictMode>
)
