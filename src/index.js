/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 09:02:23
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2022-12-30 11:20:30
 */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import App from './App'
import store from './store'
import 'normalize.css'
import '@/assets/css/reset.less'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback='loading'>
      <Provider store={store}>
        <HashRouter>
        <App />
      </HashRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
)
