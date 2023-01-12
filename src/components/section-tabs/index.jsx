/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-06 08:50:57
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-11 21:48:43
 */
import ScrollView from '@/base-ui/scroll-view'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'

import { TabsWrapper } from './style'

const SectionTabs = memo((props) => {
  const { tabNames = [], tabClick } = props
  const [currentIndex, setCurrentIndex] = useState(0)

  function itmeClick (index, item) {
    setCurrentIndex(index)
    tabClick(item)
  }
  return (
    <TabsWrapper>
      <ScrollView>
        {
          tabNames.map((item, index) => {
            return (
              <div
                key={index}
                className={classNames('item', { active: index === currentIndex })}
                onClick={e => itmeClick(index, item)}
              >
                {item}
              </div>
            )
          })
        }
      </ScrollView>
    </TabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames: PropTypes.array
}

export default SectionTabs