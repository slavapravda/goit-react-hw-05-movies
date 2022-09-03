import s from './MoviesItem.module.css';
import { Link, useLocation } from 'react-router-dom';

const MoviesItem = ({ id, name, title }) => {
  const location = useLocation();

  return (
    <li key={id} className={s.item}>
      <Link state={{ from: location }} className={s.link} to={`/movies/${id}`}>
        {name} {title}
      </Link>
    </li>
  );
};

export default MoviesItem;
