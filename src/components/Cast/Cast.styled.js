import styled from 'styled-components';

export const Actor = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`;

export const ActorName = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto};
  font-size: ${({ theme }) => theme.fontSizes.l};
`;

export const ActorCharacter = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
`;
