/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-04 10:28:14
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 15:39:15
 */
import React, { memo } from 'react'
import styleStrToObject from './utils'

const IconTriangleArrowTop = memo(() => {
  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true" focusable="false" style={styleStrToObject("height: 10px; width: 10px; fill: currentcolor;")}><path d="m23.96 17.69a.5.5 0 0 1 -.46.31h-23a .5.5 0 0 1 -.35-.86l11.5-11a .5.5 0 0 1 .69 0l11.5 11a .5.5 0 0 1 .12.55z" fillRule="evenodd"></path></svg>
  )
})

export default IconTriangleArrowTop