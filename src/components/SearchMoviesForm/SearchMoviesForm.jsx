import { useState } from 'react';
import PropTypes from 'prop-types';

import Notiflix from 'notiflix';

import s from './SearchMoviesForm.module.css';

const SearchMoviesForm = ({onSubmit}) => {
  const [query, setQuery] = useState('');

  const handelChange = event => {
    setQuery(event.target.value)
  };

  const handelSubmit = event => {
    event.preventDefault()

    if (query.trim() === '') {
        return Notiflix.Notify.info('Введіть коректну назву');
      }
      setQuery('')
      onSubmit({query})
  };


  return (
    <>
      <form className={s.searchForm} onSubmit={handelSubmit}>
        <input
            className={s.search}
          onChange={handelChange}
          value={query}
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
        <button className={s.searchBtn} type="submit">
          <span>Search</span>
        </button>
      </form>
    </>
  );
};

export default SearchMoviesForm;

SearchMoviesForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}