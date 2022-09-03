import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import s from './CastPage.module.css';

import { castMovie } from 'api/searchMovie';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await castMovie(id);
        setCast(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCast();
  }, [id]);

  const elements = cast.map(({ id, name, character, profile_path }) => (
    <li key={id} className={s.item}>
      {profile_path ? (
        <img
          className={s.photo}
          src={`https://image.tmdb.org/t/p/original${profile_path}`}
          alt={name}
          width={180}
        />
      ) : (
        <p className={s.desc}>Нажаль фото відсутнє</p>
      )}

      <p className={s.name}>{name}</p>
      <p className={s.character}>Character: {character}</p>
    </li>
  ));

  return (
    <div>
      {loading && <p>Завантаження акторского складу...</p>}
      {cast && <ul className={s.list}>{elements}</ul>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default CastPage;
