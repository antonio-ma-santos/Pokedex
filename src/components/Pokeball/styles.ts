import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 300px;

  img {
    width: 100px;
    height: 100px;
    animation: shake 0.5s alternate ease infinite;
  }

  @media (max-width: 460px) {
    img {
      width: 80px;
      height: 80px;
    }
  }

  @keyframes shake {
    0%   { transform: translate(1px, 1px) rotate(0deg); }
    10%  { transform: translate(-1px, -2px) rotate(-1deg); }
    20%  { transform: translate(-3px, 0px) rotate(1deg); }
    30%  { transform: translate(3px, 2px) rotate(0deg); }
    40%  { transform: translate(1px, -1px) rotate(1deg); }
    50%  { transform: translate(-1px, 2px) rotate(-1deg); }
    60%  { transform: translate(-3px, 1px) rotate(0deg); }
    70%  { transform: translate(3px, 1px) rotate(-1deg); }
    80%  { transform: translate(-1px, -1px) rotate(1deg); }
    90%  { transform: translate(1px, 2px) rotate(0deg); }
    100% { transform: translate(1px, -2px) rotate(-1deg); }
  }
`;