import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Mock API', () => {
  test('check page count with mock api', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.change(screen.getByTestId('sorting'), { target: { value: 3 } });
    waitFor(async () => {
      const cardsConteiner = screen.queryAllByTestId('card');
      expect(cardsConteiner).toHaveLength(10);
    });
  });
});
