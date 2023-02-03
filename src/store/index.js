/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 10:41:51
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 21:13:13
 */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detailReducer from './modules/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
  }
})

export default store