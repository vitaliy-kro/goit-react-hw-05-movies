import styled from 'styled-components';

export const ReviewItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[5]}px;
  }
`;
export const AuthorName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.roboto};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`;

export const Review = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
`;
