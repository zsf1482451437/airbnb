/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-02 21:46:46
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-03 19:58:27
 */
import PictureBrowser from '@/base-ui/pictrue-browser'
import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import { DetailPictureWrapper } from './style'

const DetailPictures = memo((props) => {
  // 组件内部状态
  const [showBrowser, setShowBrowser] = useState(false)
  // redux获取数据
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo
  }))
  return (
    <DetailPictureWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e => setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1, 5).map(item => {
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className='show-btn' onClick={e => setShowBrowser(true)}>显示照片</div>
      {showBrowser && <PictureBrowser pictureUrls={detailInfo.picture_urls} closeHandle={e => setShowBrowser(false)} />}
    </DetailPictureWrapper>
  )
})

export default DetailPictures