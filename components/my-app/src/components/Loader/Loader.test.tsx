import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import Home from '../../pages/Home/Home';
import { Loader } from './Loader';

let container: HTMLDivElement;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
});

jest.useFakeTimers();
jest.spyOn(global, 'setTimeout');

test('waits call setTimeout', () => {
  render(<Home />, container);

  expect(setTimeout).toHaveBeenCalledTimes(1);
});

test('check loader', () => {
  render(<Loader />, container);

  expect(screen.getByTestId('loader')).toBeInTheDocument;
});
