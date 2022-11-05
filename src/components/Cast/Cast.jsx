import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box } from '../Box';
import { ActorName, Actor, ActorCharacter } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    const controller = new AbortController();

    try {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=ffeb9f2f11028db54bd5076015c70d21&language=en-US`,
          { signal: controller.signal }
        )
        .then(e => {
          setActors(e.data.cast);
        });
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  }, [movieId]);
  const imageDefaultUrl = 'https://image.tmdb.org/t/p/w200';

  return (
    actors && (
      <Box as="ul" p="4">
        {actors.map(({ name, profile_path, character, id }) => (
          <Actor key={id}>
            <img src={imageDefaultUrl + profile_path} alt={`actor ${name} `} />
            <Box ml="4">
              <ActorName>{name}</ActorName>
              <ActorCharacter>{character}</ActorCharacter>
            </Box>
          </Actor>
        ))}
      </Box>
    )
  );
};
export default Cast;
