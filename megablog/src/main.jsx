import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter({
  
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
     <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)