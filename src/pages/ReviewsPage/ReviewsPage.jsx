import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { reviewsMovie } from 'api/searchMovie';

import s from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await reviewsMovie(id);
        setReviews(data.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReviews();
  }, [id]);

  return (
    <div>
      {loading && <p>Завантаження відгуків...</p>}
      {reviews.length ?(
        <ul className={s.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={s.item}>
              <h3 className={s.title}>{author}</h3>
              <p className={s.text}>{content}</p>
            </li>
          ))}
        </ul>
      ) : <p className={s.noReviews}>Вибачте, але поки що нема жодного відгука.</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default ReviewsPage;
