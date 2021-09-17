import { transparentize } from 'polished';
import styled from 'styled-components';

export const ChartWrapper = styled.div`
  text-align: center;
  border: 1px solid ${transparentize(0.9, '#274060')};
  padding: 20px;
`;