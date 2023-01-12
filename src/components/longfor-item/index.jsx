/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-11 22:18:55
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-11 22:45:01
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { ItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { itemData } = props
  return (
    <ItemWrapper>
      <div className='inner'>
        <img className='cover' src={itemData.picture_url} alt='' />
        <div className='bg-cover'></div>
        <div className='info'>
          <div className='city'>{itemData.city}</div>
          <div className='price'>均价 {itemData.price}</div>
        </div>
      </div>
    </ItemWrapper>
  )
})

LongforItem.propTypes = {
  itemData: PropTypes.object
}

export default LongforItem