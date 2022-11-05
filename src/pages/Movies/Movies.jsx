import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Box } from 'components/Box';
import {
  SearchField,
  SubmitButton,
  SearchedMoviesList,
  MovieTitle,
} from './Movies.styled';

const Movies = () => {
  const [moviesToMarkup, setMoviesToMarkup] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const movieName = searchParams.get('query');

  useEffect(() => {
    if (!movieName) {
      return;
    }
    const controller = new AbortController();
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=ffeb9f2f11028db54bd5076015c70d21&language=en-US&query=${movieName}&page=1&include_adult=false`,
          { signal: controller.signal }
        )
        .then(({ data }) => setMoviesToMarkup(data.results));
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  }, [movieName]);

  const submit = ({ search }) => {
    if (!search.trim()) {
      console.log('Type something!');
      return;
    }
    setSearchParams({ query: search });
  };

  const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';

  return (
    <Box p="4">
      <Formik onSubmit={submit} initialValues={{ search: '' }}>
        <Form>
          <SearchField name="search" />
          <SubmitButton type="submit">Search</SubmitButton>
        </Form>
      </Formik>
      {moviesToMarkup.length > 0 && (
        <SearchedMoviesList>
          {moviesToMarkup.map(({ id, title, poster_path }) => (
            <li key={id}>
              <NavLink to={`${id}`} state={{ from: location }}>
                <img src={imageDefaultUrl + poster_path} alt={title} />
                <MovieTitle>{title}</MovieTitle>
              </NavLink>
            </li>
          ))}
        </SearchedMoviesList>
      )}
    </Box>
  );
};

export default Movies;
