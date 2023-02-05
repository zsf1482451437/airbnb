/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 09:02:23
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-02 08:25:12
 */
import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

const App = memo(() => {
  // 页面切换滚到顶部
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])
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
