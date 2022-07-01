import styled from 'styled-components';

export const Container = styled.div`
  background-color: #333;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  animation: showSidebar ease-out .4s;

  > svg {
    width: 26px;
    height: 26px;
    color: #999;

    position: absolute;
    top: 32px;
    left: 12px;
    
    transition: color .3s;
    
    &:hover {
      cursor: pointer;
      color: #fff;
    }
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const Content = styled.div`
  margin-top: 100px;

  a {
    text-decoration: none;
  }
`;

export const ContentFilter = styled.div`
  margin: 4rem 1rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      
      svg {
        width: 26px;
        height: 26px;
        color: #fff;
      }

      span {
        color: #fff;
        font-size: 1rem;
        margin-left: 5px;
      }
    }

    > button {
      display: flex;
      align-items: center;

      padding: 8px 10px;
      border: none;
      border-radius: 5px;
      font-size: 1rem;

      transition: filter 0.3s;

      &:hover {
        cursor: pointer;
        filter: brightness(0.9);
      }

      > svg {
        width: 20px;
        height: 20px;
        margin-right: 8px;
      }
    }
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.6rem;
    margin-top: 20px;
  }
`;