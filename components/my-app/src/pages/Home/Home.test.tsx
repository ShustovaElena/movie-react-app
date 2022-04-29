import { render, screen, waitFor } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Mock API', () => {
  test('render home page with mock api', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );
    waitFor(async () => {
      expect(await screen.getByText('Sonic')).toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('heading', { level: 2 }));
    waitFor(() => {
      expect(screen.getByText('After settling in Green Hills')).toBeInTheDocument();
      expect(screen.getByText('8634.369')).toBeInTheDocument();
      expect(screen.getByText('2022-03-30')).toBeInTheDocument();
      expect(screen.getByText('Sonic the Hedgehog 2')).toBeInTheDocument();
      expect(screen.getByText('7.8')).toBeInTheDocument();
      expect(screen.getByText('289')).toBeInTheDocument();
    });
  });
});
