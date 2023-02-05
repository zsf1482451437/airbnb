/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-04 17:12:16
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 16:33:09
 */
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Button, notification, Space } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

import { SectionsWrapper } from './style'

const SearchSections = memo((props) => {
  const { searchInfos } = props
  const [api, contextHolder] = notification.useNotification()
  const navigate = useNavigate()
  function toDetail () {
    navigate('/entire')
  }
  // 事件处理
  function openNotification () {
    const key = `open${Date.now()}`
    const btn = (
      <Space>
        <Button type="primary" size="small" onClick={toDetail}>
          显示更多房源
        </Button>
      </Space>
    )
    api.open({
      message: '温馨提示',
      description:
        '暂无对应接口，请点击显示更多房源查看详情',
      btn,
      key,
      icon: (
        <SmileOutlined style={{ color: '#108ee9', }} />
      ),
    })
  }
  return (
    <SectionsWrapper>
      {
        searchInfos.map((item, index) => {
          return (
            <div className="item" key={index} onClick={openNotification}>
              {contextHolder}
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