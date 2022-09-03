import { useState, useEffect } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';

import s from './MovieDetails.module.css';

import { singleMovie } from 'api/searchMovie';

const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

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
      {loading && <p>Загрузка...</p>}
      {error && <p>{error.message}</p>}
      {movie && (
        <>
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
        <div className={s.infoBlock}>
          <h3 className={s.infoTitle}>Aditional informarion</h3>
        <Link className={s.cast} to={`/movies/${id}/cast`}>Cast</Link>
        <Link className={s.reviews} to={`/movies/${id}/reviews`}>Reviews</Link>
        <Outlet/>
        </div>
        </>
      )}
    </>
  );
};

export default MovieDetails;
