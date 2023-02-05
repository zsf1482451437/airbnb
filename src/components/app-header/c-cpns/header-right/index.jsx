/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:56:57
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 16:38:15
 */
import React, { memo, useEffect, useState } from 'react'
import { Button, notification, Space } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { RightWrapper } from './style'
import IconAvatar from '@/assets/svg/icon_avatar'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  // 状态
  const [showPanel, setShowPanel] = useState(false)
  const [api, contextHolder] = notification.useNotification()
  const navigate = useNavigate()
  function toDetail () {
    navigate('/entire')
  }
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
  return (
    <RightWrapper>
      <div className='btns'>
        {contextHolder}
        <span className='btn' onClick={openNotification}>登陆</span>
        <span className='btn' onClick={openNotification}>注册</span>
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
              <div className='bottom'>
                <div className='item' >出租房源</div>
                <div className='item' >开展体验</div>
                <div className='item' >帮助</div>
              </div>
            </div>
          )
        }
      </div>
    </RightWrapper>
  )
})

export default HeaderRight