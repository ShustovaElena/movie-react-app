import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Cards from './Cards';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

const fakedata = [
  {
    id: 12321,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
  {
    id: 12322,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
  {
    id: 12323,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
  {
    id: 12324,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
  {
    id: 12325,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
  {
    id: 12326,
    poster_path: 'img/noneImg.png',
    title: 'Название',
    overview: 'Здесь будет описание',
    popularity: 232.22,
    release_date: '2002-09-31',
    vote_average: 7.9,
    vote_count: 5556,
  },
];

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders cards with testing data', () => {
  act(() => {
    render(
      <BrowserRouter>
        <Cards data={fakedata} />
      </BrowserRouter>,
      container
    );
  });

  const cardsConteiner = screen.queryAllByText('Название');

  expect(cardsConteiner).toHaveLength(6);
});
