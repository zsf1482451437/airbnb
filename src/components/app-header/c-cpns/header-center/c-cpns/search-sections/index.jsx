/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-04 17:12:16
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 17:41:16
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'

import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const { searchInfos } = props
  return (
    <SectionsWrapper>
      {
        searchInfos.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="info">
                <div className="title">{item.title}</div>
                <div className="desc">{item.desc}</div>
              </div>
              {index !== searchInfos.length - 1 && <div className='divider'></div>}
            </div>
          )
        })
      }
    </SectionsWrapper>
  )
})

SearchSections.propTypes = {
  searchInfos: PropTypes.array
}

export default SearchSections