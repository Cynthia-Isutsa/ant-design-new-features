import React from 'react'
import { ConfigProvider } from "antd"
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "antd/dist/reset.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider  
    theme ={{
      token: {
        colorPrimary: "#2123bf",
      }
    }}
    >
    <App />
    </ConfigProvider>
   
  </React.StrictMode>,
)
