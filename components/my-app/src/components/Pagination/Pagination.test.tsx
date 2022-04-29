import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Mock API', () => {
  test('check pagination with mock api', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    const next = screen.getByTestId('next') as HTMLButtonElement;
    userEvent.click(next);
    waitFor(async () => {
      expect(await screen.getByText('Moonfall')).toBeInTheDocument();
    });

    userEvent.type(screen.queryByPlaceholderText(/Search/i) as Element, '33');
    waitFor(async () => {
      expect(await screen.getByText('Moonfall')).toBeInTheDocument();
    });

    const prev = screen.getByTestId('prev') as HTMLButtonElement;
    userEvent.click(prev);
    waitFor(async () => {
      expect(await screen.getByText('Moonfall')).toBeInTheDocument();
    });
  });
});
