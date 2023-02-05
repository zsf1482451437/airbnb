/*
 * @Description: 待编辑
 * @Author: SiFeng Zhai
 * @Date: 2023-01-02 09:40:06
 * @LastEditors: SiFeng Zhai
 * @LastEditTime: 2023-02-05 09:42:48
 */
import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  
  
  &.fixed {
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
  }

  .content {
    position: relative;
    z-index: 19;
    background-color: ${props => props.theme.isAlpha ? 'rgba(255, 255, 255, 0)' : 'rgba(255, 255, 255, 1)'};
    border-bottom: 1px solid #eee;
    border-bottom-color: ${props => props.theme.isAlpha ? 'rgba(233, 233, 233, 0)' : 'rgba(233, 233, 233, 1)'};
    transition: all 300ms ease;

    .top {
      display: flex;
      align-items: center;
      height: 80px;
    }

    .search-area {
      height: 100px;
    }
  }

  .cover {
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0,.5);
  }
`
export const SearchAreaWrapper = styled.div`
transition: height 300ms ease;
  height: ${props => props.isSearch ? '100px' : '0'};
`