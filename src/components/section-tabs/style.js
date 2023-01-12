/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-06 08:51:05
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-10 19:13:19
 */
import styled from "styled-components"

export const TabsWrapper = styled.div`
  margin-top: 20px;
  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 14px 16px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
    text-align: center;
    border: 0.5px solid #D8D8D8;
    white-space: nowrap;
    cursor: pointer;
    ${props => props.theme.mixin.boxShadow};

    &:last-child {
      margin-right: 0;
    }
  
    &.active {
      color: #fff;
      background-color: ${props => props.theme.color.secondaryColor};
    }
  }
`