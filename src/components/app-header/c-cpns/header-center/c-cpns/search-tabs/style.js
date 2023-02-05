/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-04 17:13:20
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-04 22:16:02
 */
import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  
  color: ${props => props.theme.isAlpha ? "#fff": "#222"};

  .item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.isAlpha ? "#fff": "#333"};
    }
  }
`