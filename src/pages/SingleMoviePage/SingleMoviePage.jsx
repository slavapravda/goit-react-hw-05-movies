import { useNavigate, useLocation } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails/MovieDetails';

import s from './SingleMoviePage.module.css';

const SingleMoviePage = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <>
      <button className={s.btn} onClick={goBack} type="button">
        &#8592; Go back
      </button>
      <MovieDetails />
    </>
  );
};

export default SingleMoviePage;
