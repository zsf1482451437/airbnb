/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-03 22:01:19
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-06 08:43:39
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import RoomItem from '@/components/room-item'
import { RoomsWrapper } from './style'

const SectionRooms = memo((props) => {
  const { roomList = [], itemWidth } = props
  return (
    <div>
      <RoomsWrapper>
        {
          roomList.slice(0, 8)?.map((item) => {
            return (
              <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />
            )
          })
        }
      </RoomsWrapper>
    </div>
  )
})

SectionRooms.propTypes = {
  roomList: PropTypes.array
}

export default SectionRooms