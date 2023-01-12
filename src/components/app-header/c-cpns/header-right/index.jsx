import React, { memo, useEffect, useState } from 'react'

import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  // 状态
  const [showPanel, setShowPanel] = useState(false)

  // 副作用
  useEffect(() => {
    function windowHandle () {
      setShowPanel(false)
    }
    window.addEventListener('click', windowHandle, true)
    // 取消监听
    return () => {
      window.removeEventListener('click', windowHandle, true)
    }
  }, [])

  // 事件监听
  function profileClick () {
    setShowPanel(true)
  }

  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登陆</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal />
        </span>
      </div>

      <div className='profile' onClick={profileClick}>
        <IconMenu />
        <IconAvatar />
        {
          showPanel && (
            <div className='panel'>
              <div className='top'>
                <div className='item register'>注册</div>
                <div className='item login'>登陆</div>
              </div>
              <div className='bottom'>
                <div className='item'>出租房源</div>
                <div className='item'>开展体验</div>
                <div className='item'>帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight