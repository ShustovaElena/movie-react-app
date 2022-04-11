import { rest } from 'msw';
import { BASE_URL, POPULAR_URL } from '../constants';
import { fakeData } from './fakedata';
import { fakeSearch } from './fakeSearch';

export const handlers = [
  rest.get('https://api.themoviedb.org/3/movie/popular', (req, res, ctx) => {
    req.url.searchParams.set('api_key', 'e0733155e2fc91d0964e4f92765a2f2d');
    req.url.searchParams.set('language', 'en-US');
    req.url.searchParams.set('page', '1');

    return res(ctx.status(200), ctx.json(fakeData));
  }),
  rest.get('https://api.themoviedb.org/3/search/movie', (req, res, ctx) => {
    req.url.searchParams.set('api_key', 'e0733155e2fc91d0964e4f92765a2f2d');
    req.url.searchParams.set('language', 'en-US');
    req.url.searchParams.set('query', 'Интерстеллар');

    return res(ctx.status(200), ctx.json(fakeSearch));
  }),
];
