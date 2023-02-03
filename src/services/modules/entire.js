/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-13 20:13:22
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-13 20:14:59
 */
import sfRequest from ".."

export function getEntireRoomList(offset = 0, size = 20) {
  return sfRequest.get({
    url: 'entire/list',
    params: {
      offset,
      size,
    }
  })
}