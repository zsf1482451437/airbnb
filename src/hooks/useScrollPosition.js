/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-05 08:20:58
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 08:42:47
 */
import { useEffect, useState } from "react"
import { throttle } from 'underscore'

export default function useScrollPosition() {
  // 装状态记录位置
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // 监听window的滚动
  useEffect(() => {
    const handleScroll = throttle(function() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { scrollX, scrollY }
}