import {useNavigate } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

import s from './SingleMoviePage.module.css';


const SingleMoviePage = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <>
      <button className={s.btn} onClick={goBack} type="button">
        &#8592; Go back
      </button>
      <MovieDetails/>
    </>
  );
};

export default SingleMoviePage;
