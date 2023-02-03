/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-02 21:08:17
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 21:12:11
 */
import { createSlice } from '@reduxjs/toolkit'
const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload
    }
  }
})

export const { changeDetailInfoAction } = detailSlice.actions
export default detailSlice.reducer