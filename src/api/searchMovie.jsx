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

export function searchMovies(query) {
  return fetch(
    `${BASE_URL}3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`По вашому запиту нiчого не знайдено`));
  });
}

export function singleMovie(id) {
  return fetch(`${BASE_URL}3/movie/${id}?api_key=${API_KEY}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(
        `Iнформацiя про даний фiльм вiдсутня, вибачте! Повернiться на головну сторiнку.`
      )
    );
  });
}

export function castMovie(id) {
  return fetch(
    `${BASE_URL}3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`Вибачте, але актерский склад вiдсутнiй.`));
  });
}

export function reviewsMovie(id) {
  return fetch(
    `${BASE_URL}3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(
      new Error(`Вибачте, але поки що нема жодного відгука.`)
    );
  });
}
