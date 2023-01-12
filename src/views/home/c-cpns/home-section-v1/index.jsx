/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-05 19:49:56
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-06 11:20:38
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionV1Wrapper } from './style'
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionFooter from '@/components/section-footer'

const HomeSertionV1 = memo((props) => {
  const { infoData } = props
  return (
    <SectionV1Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionRooms roomList={infoData.list} itemWidth='25%' />
      <SectionFooter />
    </SectionV1Wrapper>
  )
})

HomeSertionV1.propTypes = {
  infoData: PropTypes.object
}

export default HomeSertionV1