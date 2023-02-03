/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-02 17:11:40
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 19:56:17
 */
import React, { memo, useState } from 'react'
import Indicator from '@/base-ui/indicator'
import { DemoWrapper } from './style'

const Demo = memo(() => {
  const names = ['aaa', 'bbb', 'ccc', 'ddd', 'eee', 'fff']
  const [selectedIndex, setSelectedIndex] = useState(0)
  // 事件处理
  function toggleClick (isNext = true) {
    let newIndex = isNext ? selectedIndex + 1 : selectedIndex - 1
    if (newIndex < 0) newIndex = names.length - 1
    if (newIndex > names.length - 1) newIndex = 0
    setSelectedIndex(newIndex)
  }
  return (
    <DemoWrapper>
      <div className='control'>
        <button onClick={e => toggleClick(false)}>上一个</button>
        <button onClick={e => toggleClick()}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectedIndex={selectedIndex}>
          {
            names.map(item => {
              return <button key={item}>{item}</button>
            })
          }
        </Indicator>
      </div>
    </DemoWrapper>
  )
})

export default Demo