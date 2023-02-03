/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 11:07:18
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 11:04:12
 */
import * as actionType from './constants'

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
}

function reducer(state = initialState, action) {
  switch (action.type) { 
    case actionType.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    case actionType.CHANGE_ROOM_LIST:
      return { ...state, roomList: action.roomList }
    case actionType.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount }
    case actionType.CHANGE_IS_LOADING:
     return { ...state, isLoading: action.isLoading }  
    default:
      return state
      
  }
}

export default reducer