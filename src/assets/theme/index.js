/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 11:04:48
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-03 09:13:18
 */
const theme = {
  color: {
    primaryColor: '#ff385c',
    secondaryColor: '#00848A'
  },
  text: {
    primaryColor: "#484848",
    secondaryColor: "#222"
  },
  mixin: {
    boxShadow: `
      transition: box-shadow 200ms ease;
      &:hover {
        box-shadow: 0 2px 4px rgba(0,0,0,.18);
      }
    `
  }
}

export default theme