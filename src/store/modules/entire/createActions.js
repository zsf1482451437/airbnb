/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 11:06:47
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 10:59:18
 */
import { getEntireRoomList } from '@/services/modules/entire'
import * as actionType from './constants'

export const changeCurrentPageAction = (currentPage) => ({
  type: actionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomListAction = (roomList) => ({
  type: actionType.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCountAction = (totalCount) => ({
  type: actionType.CHANGE_TOTAL_COUNT,
  totalCount
})

export const changeIsLoadingAction = (isLoading) => ({
  type: actionType.CHANGE_IS_LOADING,
  isLoading
})

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getState) => {
    // 修改页码
    dispatch(changeCurrentPageAction(page))
    // 根据页码获取最新数据
    dispatch(changeIsLoadingAction(true))
    const res = await getEntireRoomList(page * 20)
    dispatch(changeIsLoadingAction(false))
    // 将最新的数据保存到redux中
    const roomList = res.list
    const totalCount = res.totalCount
    dispatch(changeRoomListAction(roomList))
    dispatch(changeTotalCountAction(totalCount))
  }
}