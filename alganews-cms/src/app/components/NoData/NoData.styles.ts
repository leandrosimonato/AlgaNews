import styled from 'styled-components';

export const NodataWrapper = styled.div<{ height: number }>`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(p) => p.height}px;
`;

export const Message = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #274060;
`;

export const SadFace = styled.span`
  font-family: 'Roboto Mono', monospace;
  color: #274060;
  font-weight: 700;
`;
