import { render, unmountComponentAtNode } from 'react-dom';
import { screen } from '@testing-library/react';
import Home from '../../pages/Home/Home';
import { Loader } from './Loader';
import { Provider } from 'react-redux';
import { store } from '../../store';

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
  render(
    <Provider store={store}>
      <Home />
    </Provider>,
    container
  );

  expect(setTimeout).toHaveBeenCalledTimes(1);
});

test('check loader', () => {
  render(<Loader />, container);

  expect(screen.getByTestId('loader')).toBeInTheDocument;
});
