import styled, { keyframes } from 'styled-components';

const loadAnimation0 = keyframes`
  0%      {background-position: 0  100%,50% 0   ,100% 0}
  8%,42%  {background-position: 0  0   ,50% 0   ,100% 0}
  50%     {background-position: 0  0   ,50% 100%,100% 0}
  58%,92% {background-position: 0  0   ,50% 0   ,100% 0}
  100%    {background-position: 0  0   ,50% 0   ,100% 100%}
`;

const loadAnimation1 = keyframes`
  100% {left:calc(100% - 8px)}
`;

const loadAnimation2 = keyframes`
  100% {top:-0.1px}
`;

const LoaderContainer = styled.div`
  width: 40px;
  height: 20px;
  --c:no-repeat radial-gradient(farthest-side,#4caf50 93%,#0000);
  background:
    var(--c) 0    0,
    var(--c) 50%  0,
    var(--c) 100% 0;
  background-size: 8px 8px;
  position: relative;
  animation: ${loadAnimation0} 1s linear infinite alternate;

  &:before {
    content: "";
    position: absolute;
    width: 8px;
    height: 12px;
    background: #4caf50;
    left: 0;
    top: 0;
    animation: 
      ${loadAnimation1} 1s  linear infinite alternate,
      ${loadAnimation2} 0.5s cubic-bezier(0,200,.8,200) infinite;
  }
`;

const LoaderHome = () => {
  return <LoaderContainer role="progressbar" aria-label="Loading content indicator" />;
};

export default LoaderHome;
