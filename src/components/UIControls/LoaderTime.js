import React from 'react';
import styled, { keyframes } from 'styled-components';

const l18_1 = keyframes`
  30%,
  70% {background-position: 
        center,
        left 50% top    calc(50% - 8px),
        left 50% bottom calc(50% - 8px),
        top  50% left   calc(50% - 8px),
        top  50% right  calc(50% - 8px)}
`;

const l18_2 = keyframes`
  0%,40%   {transform: rotate(0)}
  60%,100% {transform: rotate(90deg)}
`;

const LoaderContainer = styled.div`
  width: 40px;
  aspect-ratio: 1;
  --c: linear-gradient(#4caf50 0 0);
  --m: radial-gradient(farthest-side,#4caf50 92%,#0000);
  background: 
    var(--m) center               /12px 12px,
    var(--c) left 50% top    -20px/8px 16px, 
    var(--c) left 50% bottom -20px/8px 16px, 
    var(--c) top  50% left   -20px/16px 8px, 
    var(--c) top  50% right  -20px/16px 8px;
  background-repeat: no-repeat;
  animation: 
    ${l18_1} 1.5s infinite,
    ${l18_2} 1.5s infinite;
`;

const LoaderTime = () => {
  return <LoaderContainer role="progressbar" aria-label="Loading time indicator" />;
};

export default LoaderTime;
