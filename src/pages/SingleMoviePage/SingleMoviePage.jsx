import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import s from './SingleMoviePage.module.css';

import { singleMovie } from 'api/searchMovie';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(null);

        const movie = await singleMovie(id);
        setMovie(movie);
        console.log(movie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  return (
    <>
      <button className={s.btn} onClick={goBack} type="button">
        &#8592; Go back
      </button>
      {loading && <p>Загрузка...</p>}
      {error && <p>{error.message}</p>}
      {movie && (
        <div className={s.pagePosition}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width={420}
          />
          <div className={s.pageRight}>
            <div className={s.pageRightShadow}>
              <h2>{movie.title}</h2>
              <p>User score: {Math.round(movie.vote_average)} %</p>
            </div>
            <div className={s.pageRightShadow}>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
            </div>
            <div className={s.pageRightShadow}>
              <h4>Genres</h4>
              <p>{movie.genres.map(el => el.name).join(', ')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleMoviePage;
