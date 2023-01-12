/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:54:35
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-03 09:24:55
 */
import IconSearchBar from '@/assets/svg/icon_search_bar'
import React, { memo } from 'react'
import { CenterWrapper } from './style'

const HeaderCenter = memo(() => {
  return (
    <CenterWrapper>
      <div className='search-bar'>
        <div className='text'>
          搜索房源和体验
        </div>
        <div className='icon'>
          <IconSearchBar />
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter