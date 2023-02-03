/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-02 17:08:34
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 20:08:40
 */
import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectedIndex = 0 } = props
  const contentRef = useRef()
  useEffect(() => {
    // selectedIndex对应的item
    const selectItemEl = contentRef.current.children[selectedIndex]
    const itemOffsetLeft = selectItemEl.offsetLeft
    const itemWidth = selectItemEl.clientWidth
    // content的宽度
    const contentWidth = contentRef.current.clientWidth
    const contentScroll = contentRef.current.scrollWidth

    // selectedIndex滚动的距离
    let distance = itemOffsetLeft + itemWidth * 0.5 - contentWidth * 0.5
    // 左右两边情况的特殊处理
    if (distance < 0) distance = 0 // 左边情况的特殊处理
    const totalDistance = contentScroll - contentWidth
    if (distance > totalDistance) distance = totalDistance // 右边情况的特殊处理
    // 滚动
    contentRef.current.style.transform = `translate(${-distance}px)`
  }, [selectedIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectedIndex: PropTypes.number
}

export default Indicator