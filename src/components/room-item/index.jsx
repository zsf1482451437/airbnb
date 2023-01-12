/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-03 19:18:34
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-06 08:40:33
 */
import { Rating } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { ItemWrapper } from './style'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%' } = props
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
    >
      <div className='inner'>
        <div className='cover'>
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className='desc'>
          {itemData.verify_info.messages.join('·')}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>￥{itemData.price}/晚</div>
        <div className='bottom'>
          <Rating
            value={itemData.star_rating ?? 5}
            precision={0.5}
            readOnly
            sx={{ fontSize: "12px", color: "#00848A" }}
          />
          <span className='count'>{itemData.reviews_count}</span>
          {
            itemData.bottom_info && (<span className='extra'>·{itemData.bottom_info.content}</span>)
          }
        </div>
      </div>
    </ItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object
}

export default RoomItem