import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Card from './card';

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
        key={1}
        src="img/1.jpg"
        name="Название"
        year="2002"
        genre="Жанр"
        rating="8.8"
        likesCount={123}
      />,
      container
    );
  });
  expect(document.querySelector('.Card-img')).toHaveAttribute('src', 'img/1.jpg');
  expect(document.querySelector('.Card-name')?.textContent).toBe('Название');
  expect(document.querySelector('.Card-year')?.textContent).toBe('Год выпуска: 2002');
  expect(document.querySelector('.Card-genre')?.textContent).toBe('Жанр: Жанр');
  expect(document.querySelector('.rate')?.textContent).toBe('8.8');
  expect(document.querySelector('.like')?.textContent).toBe('123');
});
