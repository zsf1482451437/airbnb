/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 10:26:49
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 21:53:25
 */
import React, { memo } from 'react'
import DetailInfo from './c-cpns/detail-info'
import DetailPictures from './c-cpns/detail-pictures'
import { DetailWrapper } from './style'

const Detail = memo(() => {

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfo />
    </DetailWrapper>
  )
})

export default Detail