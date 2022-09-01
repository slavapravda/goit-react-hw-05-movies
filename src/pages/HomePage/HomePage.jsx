import s from './HomePage.module.css';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';

const HomePage = () => {
  return (
    <div>
      <h1 className={s.title}>Trending Today</h1>
      <MoviesGallery />
    </div>
  );
};

export default HomePage;
