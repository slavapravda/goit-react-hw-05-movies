const BASE_URL = 'https://api.themoviedb.org/';
const API_KEY = '6cfef64e07855702e198aec946e650ef';


function trendingMovies() {
  return fetch(`${BASE_URL}3/trending/all/day?api_key=${API_KEY}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error(`Sorry`));
    }
  );
}

export default trendingMovies;


export function singleMovie(id) {
  return fetch(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Iнформацiя про даний фiльм вiдсутня, вибачте! Повернiться на головну сторiнку.`));
  });
}
