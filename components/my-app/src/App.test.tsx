import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import '@testing-library/jest-dom';

import App from './App';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

test('full app rendering/navigating', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByText(/Сделай свой выбор/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about us/i), leftClick);

  expect(screen.getByText(/Who are we/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/something-that-does-not-match' });

  expect(screen.getByText(/Error 404: Page not found/i)).toBeInTheDocument();
});
