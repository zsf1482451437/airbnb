/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-12 09:44:48
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-12 10:21:35
 */
import React, { memo, useState } from 'react'
import { FilterWrapper } from './style'
import filerData from '@/assets/data/filter_data.json'
import classNames from 'classnames'

const EntireFilter = memo(() => {
  const [selectItems, setSelectItems] = useState([])
  // 事件处理
  function itemClick (item) {
    const newItems = [...selectItems]
    if (newItems.includes(item)) { // 移除
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex, 1)
    } else { // 添加
      newItems.push(item)
    }
    setSelectItems(newItems)
  }
  return (
    <FilterWrapper>
      <div className="filter">
        {
          filerData.map(item => {
            return (
              <div
                className={classNames("item", { active: selectItems.includes(item) })}
                key={item}
                onClick={e => itemClick(item)}
              >
                {item}
              </div>
            )
          })
        }
      </div>
    </FilterWrapper>
  )
})

export default EntireFilter