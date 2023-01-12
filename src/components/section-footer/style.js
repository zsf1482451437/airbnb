/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-06 11:16:57
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-01-06 11:45:21
 */

import styled from "styled-components"

export const FooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  .info {
    display: flex;
    align-items: center;
    cursor: pointer;

    font-size: 17px;
    font-weight: 700;
    color: ${props => props.color};

    &:hover {
      text-decoration: underline;
    }

    .text {
      margin-right: 6px;
    }
  }
`