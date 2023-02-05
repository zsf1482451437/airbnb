/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-04 16:14:58
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 09:06:14
 */
import { createSlice } from '@reduxjs/toolkit'
const mainSlice = createSlice({
  name: 'main',
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false,
    },
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer