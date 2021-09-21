import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`;

export const Item = styled.li`
  text-transform: lowercase;
  font-size: 18px;
  a {
    text-decoration: none;
    color: #274060;
  }
`;

