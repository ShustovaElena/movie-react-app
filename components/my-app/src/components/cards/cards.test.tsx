import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Cards from './cards';
import { screen } from '@testing-library/react';

const fakedata = [
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
  },
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
  },
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
  },
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
  },
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
  },
  {
    key: 1,
    src: 'img/1.jpg',
    name: 'Название',
    year: '2002',
    genre: 'Жанр',
    rating: '8.8',
    likesCount: 123,
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
    render(<Cards data={fakedata} />, container);
  });

  const cardsConteiner = screen.queryAllByText('Название');

  expect(cardsConteiner).toHaveLength(6);
});
