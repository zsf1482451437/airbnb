/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:48:29
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-13 20:46:12
 */

import React, { memo } from 'react'
import { LeftWrapper } from './style'

import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function logoClick () {
    navigate('/home')
  }
  return (
    <LeftWrapper>
      <div className='logo' onClick={logoClick}>
        <IconLogo />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft