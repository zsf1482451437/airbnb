/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-12 09:47:49
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 17:04:51
 */
import React, { memo, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup'

import { RoomsWrapper } from './style'
import RoomItem from '@/components/room-item'

import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo(() => {
  // redux中的数据
  const { roomList, totalCount, isLoading } = useSelector((state) => ({
    roomList: state.entire.roomList,
    totalCount: state.entire.totalCount,
    isLoading: state.entire.isLoading,
  }), shallowEqual)

  // 事件处理
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const click = useCallback((item) => {
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  }, [navigate, dispatch])

  return (
    <RoomsWrapper>
      <h2 className='title'>
        <CountUp start={0} end={totalCount} duration='2'></CountUp>
        多处住宿
      </h2>
      <div className='list'>
        {
          roomList.map(item => {
            return (
              <RoomItem
                itemData={item}
                itemWidth='20%'
                key={item._id}
                itemClick={click}
              />
            )
          })
        }
      </div>
      {isLoading && <div className='cover'></div>}
    </RoomsWrapper>
  )
})

export default EntireRooms