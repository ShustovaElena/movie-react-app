export const CURRENT_YEAR = 2022;
export const RIGHT_ANSWER = 'right-answer';
export const WRONG_ANSWER_COLOR = 'rgba(255, 0, 0, 0.3)';
export const COUNTRY = ['Russia', 'Belarus', 'USA', 'India', 'China'];
export const VALID_AGE = 18;
export const MAX_SIZE_FILE = 5242880;
export const EXTENSIONS = ['jpg', 'jpeg', 'png'];
export const BASE_URL =
  'https://api.themoviedb.org/3/search/movie?api_key=e0733155e2fc91d0964e4f92765a2f2d&language=en-US';
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const POPULAR_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=e0733155e2fc91d0964e4f92765a2f2d&language=en-US&page=1';
export const SORTING_URL =
  'https://api.themoviedb.org/3/discover/movie?api_key=e0733155e2fc91d0964e4f92765a2f2d&language=en-US&sort_by=';

export const USER_FORM_DATA_INITIAL = {
  name: '',
  age: '',
  country: '',
  userInfo: 'Нет',
  stock: 'Нет',
  file: {},
};
export const ERRORS_INITIAL = {
  name: 'Введите ФИО длиннее 6 символов',
  date: 'Вам еще нет 18 лет!',
  file: 'Добавьте файл .jpg, .jpeg, .png и менее 5mb',
};
