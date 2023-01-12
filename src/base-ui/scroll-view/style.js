/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-10 19:02:42
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-11 21:47:57
 */

import styled from "styled-components"

export const ViewWrapper = styled.div`
  position: relative;
  padding: 8px 0;
  
  .scroll {
    overflow: hidden;
    .scroll-content {
      display: flex;
      transition: transform 300ms ease;
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`
