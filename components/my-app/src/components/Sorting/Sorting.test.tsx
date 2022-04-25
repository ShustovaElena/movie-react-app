import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';

describe('Mock API', () => {
  test('check sorting with mock api', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    fireEvent.change(screen.getByTestId('sorting'), { target: { value: 3 } });
    waitFor(async () => {
      expect(await screen.getByText('Spider-Man: No Way Home')).toBeInTheDocument();
    });
  });
});
