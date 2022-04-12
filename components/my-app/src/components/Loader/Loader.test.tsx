import { render, unmountComponentAtNode } from 'react-dom';
import Loader from './Loader';

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

test('waits 3 second before ending loader', () => {
  const removeLoader = jest.fn();
  render(<Loader removeLoader={removeLoader} />, container);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 3000);
});
