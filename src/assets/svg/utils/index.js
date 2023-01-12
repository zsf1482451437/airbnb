/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 10:41:21
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-02 10:46:03
 */
function styleStrToObject(styleStr) {
  const obj = {}

  const s = styleStr.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase()
  }).replace(/;\s?$/g,"").split(/:|;/g)
  
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g,"")] = s[i+1].replace(/^\s+|\s+$/g,"")
  }

  return obj
}

export default styleStrToObject