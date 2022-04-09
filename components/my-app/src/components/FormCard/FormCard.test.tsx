import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from '../../pages/Profile/Profile';

test('checked card', async () => {
  render(<Profile />);
  userEvent.type(screen.getByLabelText('ФИО:'), 'Иванов Иван');
  userEvent.type(screen.getByLabelText('Дата рождения:'), '1999-05-01');
  userEvent.type(screen.getByLabelText('Ваша страна проживания:'), 'Russia');

  const checkbox = screen.getByLabelText(
    'Я согласен/согласна на обработку персональных данных'
  ) as HTMLInputElement;
  userEvent.click(checkbox);

  const switcher = screen.getByAltText('switch') as HTMLInputElement;
  userEvent.click(switcher);

  window.URL.createObjectURL = jest.fn();

  const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
  const inputFile = screen.getByLabelText('Загрузите фото') as HTMLInputElement;
  userEvent.upload(inputFile, fakeFile);

  const submit = screen.getByAltText('submit') as HTMLInputElement;
  userEvent.click(submit);
  await waitFor(() => {
    expect(screen.getByText('Данные успешно сохранены!')).toBeInTheDocument();

    expect(screen.getByAltText(/User photo/i)).toBeInTheDocument();
    expect(screen.getByText('Ваш профиль')).toBeInTheDocument();
    expect(screen.getByText('Фио: Иванов Иван')).toBeInTheDocument();
    expect(screen.getByText('Возраст: 1999-05-01')).toBeInTheDocument();
    expect(screen.getByText('Страна проживания: Russia')).toBeInTheDocument();
    expect(
      screen.getByText('Согласен/на на обработку персональных данных: Да')
    ).toBeInTheDocument();
    expect(screen.getByText('Получать уведомления об акциях: Да')).toBeInTheDocument();
  });
});
