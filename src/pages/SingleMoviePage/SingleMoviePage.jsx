import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import s from './SingleMoviePage.module.css';

import { singleMovie } from 'api/searchMovie';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState([]);
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

      } catch (error) {
        setError(error);

      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  const movieGenres = movie.genres?.map(el => el.name).join(', ');

  return (
    <>
      <button className={s.btn} onClick={goBack} type="button">
        &#8592; Go back
      </button>
      {loading && <p>Загрузка...</p>}
      <div className={s.pagePosition}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          width={420}
        />
        <div className={s.pageRight}>
          <h2>{movie.title}</h2>
          <p>User score: {movie.vote_average} %</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <h4>Genres</h4>
          <p>{movieGenres}</p>
        </div>
      </div>
    </>
  );
};

export default SingleMoviePage;
