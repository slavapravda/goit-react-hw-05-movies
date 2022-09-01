import s from './MoviesGallery.module.css';
import trendingMovies from '../../api/searchMovie';
import MoviesItem from 'components/MoviesItem/MoviesItem';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MoviesGallery = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovies() {
      setLoading(true);
      try {
        const data = await trendingMovies();
        console.log(data);
        setMovies(data.results)

      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    getMovies();
  }, []);

  return (
    <>
    {loading && <p>Загрузка...</p>}
      <ul>
        {movies.map(({ id, name, title }) => (
          <MoviesItem
          id={id}
          name={name}
          title={title}/>
        ))}
      </ul>
      {error && <p>{error.message}</p>}
    </>
  );
};

export default MoviesGallery;
