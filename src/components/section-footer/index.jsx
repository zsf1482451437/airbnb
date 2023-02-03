/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-06 11:16:52
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-12 09:21:32
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'

import { FooterWrapper } from './style'
import IconMoreArrow from '@/assets/svg/icon_more_arrow'

const SectionFooter = memo((props) => {
  const { name } = props
  let showMsg = '显示全部'
  if (name) {
    showMsg = `显示更多${name}房源`
  }
  // 事件处理
  const navigate = useNavigate()
  function more () {
    navigate('/entire')
  }

  return (
    <FooterWrapper color={name ? '#00848A' : '#000'}>
      <div className='info' onClick={more}>
        <span className='text'>{showMsg}</span>
        <IconMoreArrow />
      </div>
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter