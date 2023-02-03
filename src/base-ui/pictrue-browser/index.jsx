/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-03 09:28:39
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-03 19:56:53
 */
import IconClose from '@/assets/svg/icon_close'
import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import { BrowserWrapper } from './style'

const PictureBrowser = memo((props) => {
  const { pictureUrls, closeHandle } = props
  // 当图片浏览器显示时，需要滚动功能消失
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  // 事件处理
  function closeClick () {
    // 通知父组件关闭图片浏览器
    if (closeHandle) closeHandle()
  }
  return (
    <BrowserWrapper>
      <div className="top">
        <div className="close-btn" onClick={closeClick}>
          <IconClose />
        </div>
      </div>
      <div className="silder"></div>
      <div className="preview"></div>
    </BrowserWrapper>
  )
})

PictureBrowser.propTypes = {
  pictureUrls: PropTypes.array
}

export default PictureBrowser