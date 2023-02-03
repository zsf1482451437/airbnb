/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 10:19:24
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 17:13:02
 */
import React from 'react'
import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Entire = React.lazy(() => import('@/views/entire'))
const Detail = React.lazy(() => import('@/views/detail'))
const Demo = React.lazy(() => import('@/views/demo'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home'/>
  },
  {
    path: '/home',
    element: <Home/>
  },
  {
    path: '/entire',
    element: <Entire/>
  },
  {
    path: '/detail',
    element: <Detail/>
  },
  {
    path: '/demo',
    element: <Demo/>
  },
]

export default routes