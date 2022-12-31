/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2022-12-30 09:40:25
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2022-12-30 09:51:53
 */
const path = require('path');
const CracoLessPlugin = require('craco-less');

const resolve = dir => path.resolve(__dirname, dir);

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    },
  ],
  // webpack
  webpack: {
    alias: {
      '@': resolve('src'),
      'components': resolve('src/components'),
      'utils': resolve('src/utils')
    }
  }
}