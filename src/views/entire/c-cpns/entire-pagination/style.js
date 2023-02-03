/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-12 09:47:43
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-02 10:09:24
 */
import styled from "styled-components"

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-page {
      margin:  0 9px;
      &:hover {
        text-decoration: underline;
      }
    }

    .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      margin-top: 16px;
      color: #222;
    }
  }
`