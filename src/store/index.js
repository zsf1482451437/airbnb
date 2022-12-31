/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 10:41:51
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2022-12-30 11:05:09
 */
import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store