import { useState, useEffect } from 'react';
import axios from 'axios';
import { Title, TrendingList, MovieTitle } from './Home.styled';
import { NavLink, useLocation } from 'react-router-dom';
import { Box } from 'components/Box';

const Home = () => {
  const [moviesTrends, setMoviesTrends] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const controller = new AbortController();
    try {
      (function getTrends() {
        axios
          .get(
            'https://api.themoviedb.org/3/trending/movie/day?api_key=ffeb9f2f11028db54bd5076015c70d21',
            { signal: controller.signal }
          )
          .then(({ data }) => {
            setMoviesTrends(data.results);
          });
      })();
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  }, []);

  const imageDefaultUrl = 'https://image.tmdb.org/t/p/w300';
  return (
    <Box p="5">
      <Title>Trending today</Title>
      <TrendingList as="ul">
        {moviesTrends.map(({ title, id, poster_path }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{ from: location }}>
              <img src={imageDefaultUrl + poster_path} alt={title} />
              <MovieTitle>{title}</MovieTitle>
            </NavLink>
          </li>
        ))}
      </TrendingList>
    </Box>
  );
};

export default Home;
