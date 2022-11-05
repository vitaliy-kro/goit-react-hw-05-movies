import { Field } from 'formik';
import styled from 'styled-components';

export const SearchField = styled(Field)`
  padding: ${({ theme }) => theme.space[3]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
`;

export const SubmitButton = styled.button`
  font-family: ${({ theme }) => theme.fonts.monospace};
  margin-left: ${({ theme }) => theme.space[3]}px;
  padding: ${({ theme }) => theme.space[2]}px;
  border-radius: ${({ theme }) => theme.radii.normal};
  background-color: rgb(4, 170, 109);
  color: white;

  :hover,
  :focus {
    background-color: #059862;
    cursor: pointer;
  }
`;

export const SearchedMoviesList = styled.ul`
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

export const MovieTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.monospace};
`;
