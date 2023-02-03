/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 10:26:15
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-13 20:21:56
 */

import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import EntireRooms from './c-cpns/entire-rooms'
import { EntireWrapper } from './style'
import { fetchRoomListAction } from '@/store/modules/entire/createActions'

const Entire = memo(() => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchRoomListAction())
  }, [dispatch])
  return (
    <EntireWrapper>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </EntireWrapper>
  )
})

export default Entire