/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 09:02:23
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-02 08:25:12
 */
import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {
          useRoutes(routes)
        }
      </div>
      <AppFooter />
    </div>
  )
})

export default App
