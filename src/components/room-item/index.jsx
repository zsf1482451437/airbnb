/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-03 19:18:34
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 16:52:28
 */
import { Rating } from '@mui/material'
import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Button, notification, Space, Carousel } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { ItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import Indicator from '@/base-ui/indicator'
import classNames from 'classnames'

const RoomItem = memo((props) => {
  const { itemData, itemWidth = '25%', itemClick } = props
  const [selectedIndex, setSelectedIndex] = useState(0)
  const swiperRef = useRef()
  const [api, contextHolder] = notification.useNotification()
  const navigate = useNavigate()
  function toDetail () {
    navigate('/entire')
  }
  // 事件处理
  function controlClick (isRight = true, event) {
    // 上一张，下一张
    isRight ? swiperRef.current.next() : swiperRef.current.prev()
    // 更新选中item
    let newIndex = isRight ? selectedIndex + 1 : selectedIndex - 1
    const length = itemData.picture_urls.length
    if (newIndex < 0) newIndex = length - 1
    if (newIndex > length - 1) newIndex = 0
    setSelectedIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }

  function itemClickHanlde () {
    if (itemClick) itemClick(itemData)
  }

  function openNotification () {
    const key = `open${Date.now()}`
    const btn = (
      <Space>
        <Button type="primary" size="small" onClick={toDetail}>
          显示更多房源
        </Button>
      </Space>
    )
    api.open({
      message: '温馨提示',
      description:
        '暂无对应接口，请点击显示更多房源查看详情',
      btn,
      key,
      icon: (
        <SmileOutlined style={{ color: '#108ee9', }} />
      ),
    })
  }

  // 子元素赋值
  const pictrueEl = (
    <div className='cover' onClick={openNotification}>
      {contextHolder}
      <img src={itemData.picture_url} alt="" />
    </div>
  )

  const swiperEl = (
    <div className='swiper'>
      {/* 左右箭头 */}
      <div className='control'>
        <div className='btn left' onClick={e => controlClick(false, e)}>
          <IconArrowLeft width="30" height="30" />
        </div>
        <div className='btn right' onClick={e => controlClick(true, e)}>
          <IconArrowRight width="30" height="30" />
        </div>
      </div>
      {/* 图片 */}
      <Carousel dots={false} ref={swiperRef}>
        {
          itemData?.picture_urls?.map(item => {
            return (
              <div className='cover' key={item}>
                <img src={item} alt="" />
              </div>
            )
          })
        }
      </Carousel>
      {/* 指示器 */}
      <div className='indicator'>
        <Indicator selectedIndex={selectedIndex}>
          {
            itemData?.picture_urls?.map((item, index) => {
              return (
                <div className='dot-item' key={item}>
                  <span className={classNames('dot', { active: selectedIndex === index })}></span>
                </div>
              )
            })
          }
        </Indicator>
      </div>
    </div>
  )
  return (
    <ItemWrapper
      verifyColor={itemData?.verify_info?.text_color || '#39576a'}
      itemWidth={itemWidth}
      onClick={itemClickHanlde}
    >
      <div className='inner'>
        {/* 轮播图片区 */}
        {!itemData.picture_urls ? pictrueEl : swiperEl}
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