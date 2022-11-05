import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ReviewItem, AuthorName, Review } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const controller = new AbortController();

    try {
      axios
        .get(
          `
https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=ffeb9f2f11028db54bd5076015c70d21&language=en-US&page=1`,
          { signal: controller.signal }
        )
        .then(({ data: { results } }) => {
          setReviews(results);
        });
    } catch (error) {
      console.log(error);
    }

    return () => {
      controller.abort();
    };
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(({ author, content, id }) => (
        <ReviewItem key={id}>
          <AuthorName>Author: {author}</AuthorName>
          <Review>{content}</Review>
        </ReviewItem>
      ))}
    </ul>
  ) : (
    <Review> There are yet no reviews for this film.</Review>
  );
};

export default Reviews;
