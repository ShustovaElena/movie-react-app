import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Card from './Card';
import { screen } from '@testing-library/react';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

it('renders card with testing data', () => {
  act(() => {
    render(
      <Card
        id={12321}
        poster_path="img/noneImg.png"
        title="Название"
        overview="Здесь будет описание"
        popularity={232.22}
        release_date=""
        vote_average={7.9}
        vote_count={5556}
      />,
      container
    );
  });

  expect(screen.getByAltText(/Image cartoon/i)).toHaveAttribute(
    'src',
    'https://image.tmdb.org/t/p/w500img/noneImg.png'
  );
  expect(screen.getByText('Название')).toBeInTheDocument();
});
