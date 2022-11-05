import { useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { HiArrowLeft } from 'react-icons/hi';
import { Outlet } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { Box } from 'components/Box';
import {
  MovieTitle,
  MovieUserScore,
  MovieOverviewTitle,
  MovievOverview,
  MovieGenresTitle,
  MovieGenres,
  Link,
  GoBackLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  useEffect(() => {
    const controller = new AbortController();
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=ffeb9f2f11028db54bd5076015c70d21&language=en-US`,
          { signal: controller.signal }
        )
        .then(({ data }) => {
          setMovie(data);
        });
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  }, [movieId]);
  const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    movie && (
      <div>
        <GoBackLink to={location.state?.from ?? '/'}>
          <HiArrowLeft size="24" />
          Go back
        </GoBackLink>
        <Box p="4" display="flex">
          <img src={imageDefaultUrl + movie.poster_path} alt={movie.title} />
          <Box ml="3">
            <MovieTitle>
              {movie.title} (<span>{movie.release_date.slice(0, 4)}</span>)
            </MovieTitle>
            <MovieUserScore>
              User score: {Math.round(movie.vote_average * 10)}%
            </MovieUserScore>
            <MovieOverviewTitle>Overview</MovieOverviewTitle>
            <MovievOverview>{movie.overview}</MovievOverview>
            <MovieGenresTitle>Genres: </MovieGenresTitle>
            {movie.genres.map(({ name }) => (
              <MovieGenres key={name}>{name}</MovieGenres>
            ))}
          </Box>
        </Box>
        <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
          Cast
        </Link>
        <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
          Reviews
        </Link>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    )
  );
};
export default MovieDetails;
