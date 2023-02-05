/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 09:02:23
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 22:56:45
 */
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'


import App from './App'
import store from './store'
import 'normalize.css'
import '@/assets/css/index.less'
import theme from './assets/theme'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <Suspense fallback='loading'>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Suspense>
  </Provider>
)
