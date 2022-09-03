import SearchMoviesForm from 'components/SearchMoviesForm/SearchMoviesForm';
import MoviesItem from 'components/MoviesItem/MoviesItem';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from 'api/searchMovie';

import s from './MoviesPage.module.css'

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams()
  const q = searchParams.get('query')

  const formSearchHandler = ({query}) => {
    setSearchParams({query})
  };

  useEffect(() => {
    if(q){
      const fetchMovies = async() => {

        try {
          setLoading(true)
          setError(null)
          const data = await searchMovies(q)
          setMovies(data.results)
        } catch (error) {
          setError(error)
  
        }finally{
          setLoading(false)
        }
      }
    fetchMovies()
    }

  }, [q])

  return (
    <>
      <SearchMoviesForm onSubmit={formSearchHandler} />
      {loading && <p>Пошук фiльмiв...</p>}
      {movies && (
        <ul className={s.list}>
          {movies.map(({ id, name, title }) => (
            <MoviesItem id={id} key={id} name={name} title={title} />
          ))}
        </ul>
      )}
      {error && <p>{error.message}</p>}
    </>
  );
};

export default MoviesPage;
