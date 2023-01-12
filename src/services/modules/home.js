/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-03 11:27:14
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-12 08:06:37
 */
import sfRequest from ".."

export function getHomeGoodPriceData() {
  return sfRequest.get({
    url: '/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return sfRequest.get({
    url: '/home/highscore'
  })
}

export function getHomeDiscountData() {
  return sfRequest.get({
    url: '/home/discount'
  })
}

export function getHomeHotRecommendData() {
  return sfRequest.get({
    url: '/home/hotrecommenddest'
  })
}

export function getHomeLongForData() {
  return sfRequest.get({
    url: '/home/longfor'
  })
}

export function getHomePlusData() {
  return sfRequest.get({
    url: '/home/plus'
  })
}