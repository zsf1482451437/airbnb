/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-03 14:45:57
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-03 19:08:36
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subtitle } = props
  return (
    <SectionWrapper>
      <h2 className='title'>{title}</h2>
      {
        subtitle && (
          <div className='subtitele'>{subtitle}</div>
        )
      }
    </SectionWrapper>
  )
})

SectionHeader.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default SectionHeader