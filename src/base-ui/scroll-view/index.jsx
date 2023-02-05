/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-10 19:02:33
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 16:43:22
 */
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
// import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ViewWrapper } from './style'

const ScrollView = memo((props) => {
  // 状态
  const [showLeft, setShowLeft] = useState(false)
  const [showRight, setShowRight] = useState(false)
  const [posIndex, setPosIndex] = useState(0)
  const totalDistanceRef = useRef()

  // 组件渲染完成，判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth // 可滚动宽度
    const clientWidth = scrollContentRef.current.clientWidth // 本身占据宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  }, [props.children])

  // 事件处理
  function controlClick (isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    const newEl = scrollContentRef.current.children[newIndex]
    scrollContentRef.current.style.transform = `translate(-${newEl.offsetLeft}px)`
    setPosIndex(newIndex)
    // 是否继续显示两边按钮
    setShowRight(totalDistanceRef.current > newEl.offsetLeft)
    setShowLeft(newEl.offsetLeft > 0)
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className='control left' onClick={e => controlClick(false)}>
          <IconArrowLeft />
        </div>
      )
      }
      {showRight && (
        <div className='control right' onClick={e => controlClick(true)}>
          <IconArrowRight />
        </div>
      )
      }
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  )
})

// ScrollView.propTypes = {}

export default ScrollView