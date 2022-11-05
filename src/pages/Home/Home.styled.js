import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const TrendingList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

export const MovieTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.monospace};
`;
