import { render, screen, waitFor } from '@testing-library/react';
import Search from './Search';
import App from '../../App';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

test('renders search placeholder', () => {
  const setDataFromApi = jest.fn();
  const pressSubmit = jest.fn();

  render(<Search userInput={''} setDataFromApi={setDataFromApi} pressSubmit={pressSubmit} />);

  const element = screen.queryByPlaceholderText(/Search/i);
  expect(element).toBeInTheDocument();
});

// jest.mock('localStorage');

test('should fake data in storage', () => {
  const fakeData = 'fake-value';
  const setDataFromApi = jest.fn();
  const pressSubmit = jest.fn();

  render(<Search userInput={''} setDataFromApi={setDataFromApi} pressSubmit={pressSubmit} />);

  userEvent.type(screen.queryByPlaceholderText(/Search/i) as Element, fakeData);

  expect(window.localStorage.getItem('userInput')).toEqual(fakeData);
});

describe('Mock API', () => {
  test('check search with mock api', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    userEvent.type(screen.queryByPlaceholderText(/Search/i) as Element, 'Интерстеллар');
    const submit = screen.getByRole('button') as HTMLButtonElement;
    userEvent.click(submit);
    waitFor(async () => {
      expect(await screen.getByTestId('loader')).toBeInTheDocument();
    });
    waitFor(async () => {
      expect(await screen.getByText('Interstellar')).toBeInTheDocument();
    });
    userEvent.click(screen.getByRole('heading', { level: 2 }));
    waitFor(() => {
      expect(
        screen.getByText('The adventures of a group of explorers who make')
      ).toBeInTheDocument();
      expect(screen.getByText('163.278')).toBeInTheDocument();
      expect(screen.getByText('2014-11-05')).toBeInTheDocument();
      expect(screen.getByText('Interstellar')).toBeInTheDocument();
      expect(screen.getByText('8.4')).toBeInTheDocument();
      expect(screen.getByText('28221')).toBeInTheDocument();
    });
  });
});
