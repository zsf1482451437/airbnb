/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-11 22:05:38
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-11 22:56:03
 */

import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { LongForWrapper } from './style'
import SectionHeader from '@/components/section-header'
import LongforItem from '@/components/longfor-item'
import ScrollView from '@/base-ui/scroll-view'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <LongForWrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city} />
            })
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData: PropTypes.object
}

export default HomeLongFor