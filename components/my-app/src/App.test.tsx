import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@testing-library/jest-dom';

import App from './App';
import { store } from './store';

const renderWithRouter = (ui: JSX.Element, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

test('full app rendering/navigating', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText(/Сделай свой выбор/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/about us/i), leftClick);

  expect(screen.getByText(/Who are we/i)).toBeInTheDocument();

  userEvent.click(screen.getByText(/my profile/i), leftClick);

  expect(screen.getByText(/Создайте свою учетную запись/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/something-that-does-not-match' });

  expect(screen.getByText(/Error 404: Page not found/i)).toBeInTheDocument();
});
