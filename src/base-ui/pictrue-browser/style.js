/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-02-03 09:28:47
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-03 20:12:42
 */
import styled from "styled-components"

export const BrowserWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }
  
  .content {
    flex: 1;
  }

  .indicator {
    width: 2px;
  }
`