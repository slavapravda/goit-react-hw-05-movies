import s from './MoviesItem.module.css';
import { Link } from 'react-router-dom';

const MoviesItem = ({ id, name, title }) => {
  return (
    <li key={id} className={s.item}>
      <Link className={s.link} to={`movies/${id}`}>
        {name} {title}
      </Link>
    </li>
  );
};

export default MoviesItem;
