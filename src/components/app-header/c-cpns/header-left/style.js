/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:48:35
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 09:32:02
 */
import styled from "styled-components"

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  color: ${props => props.theme.isAlpha ? '#fff' : props.theme.color.primaryColor};

  .logo {
    margin-left: 25px;
    cursor: pointer;
  }
`