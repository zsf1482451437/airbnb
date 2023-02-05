/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:54:35
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 22:55:33
 */

import React, { memo, useState } from 'react'


import { CenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon_search_bar'
import searchTitles from '@/assets/data/search_titles'
import SearchSections from './c-cpns/search-sections'
import SearchTabs from './c-cpns/search-tabs'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const { isSearch, searchClickHandle } = props
  const [tabIndex, setTabIndex] = useState(0)

  const titles = searchTitles.map(item => item.title)
  // 事件处理
  function searchClick () {
    if (searchClickHandle) searchClickHandle()
  }

  return (
    <CenterWrapper>
      <CSSTransition in={!isSearch} classNames='bar' timeout={250} unmountOnExit={true}>
        <div className='search-bar' onClick={searchClick}>
          <div className='text'>
            搜索房源和体验
          </div>
          <div className='icon'>
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>
      <CSSTransition in={isSearch} classNames='detail' timeout={250} unmountOnExit={true}>
        <div className="search-detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={searchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  )
})

export default HeaderCenter