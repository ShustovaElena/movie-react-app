import { render, screen } from '@testing-library/react';
import Search from '../search/search';

test('renders search placeholder', () => {
  render(<Search userInput={''} />);
  const element = screen.queryByPlaceholderText(/Search/i);
  expect(element).toBeInTheDocument();
});

test('should fake data in storage', () => {
  const fakeData = 'fake-value';
  render(<Search userInput={fakeData} />);
  expect(window.localStorage.getItem('userInput')).toEqual(fakeData);
});
