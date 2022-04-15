import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import ModalWindow from './ModalWindow';
import { screen } from '@testing-library/react';

const fakedata = {
  id: 32,
  poster_path: 'img/noneImg.png',
  title: 'Название',
  overview: 'Здесь будет описание',
  popularity: 232.22,
  release_date: '2002-09-31',
  vote_average: 7.9,
  vote_count: 5556,
};

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders ModulWindow with testing data', () => {
  const onClick = jest.fn();
  const onClickOverlay = jest.fn();

  act(() => {
    render(
      <ModalWindow data={fakedata} onClick={onClick} onClickOverlay={onClickOverlay} />,
      container
    );
  });

  expect(screen.getByAltText(/Image/i)).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500img/noneImg.png'
  );
  expect(screen.getByText('Название')).toBeInTheDocument();
  expect(screen.getByText('Здесь будет описание')).toBeInTheDocument();
  expect(screen.getByText('232.22')).toBeInTheDocument();
  expect(screen.getByText('2002-09-31')).toBeInTheDocument();
  expect(screen.getByText('7.9')).toBeInTheDocument();
  expect(screen.getByText('5556')).toBeInTheDocument();
});
