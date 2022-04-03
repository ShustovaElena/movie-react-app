import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from './profile';

test('checked form', async () => {
  render(<Profile />);
  userEvent.type(screen.getByLabelText('ФИО:'), 'hello');
  await waitFor(() => {
    expect(screen.getByLabelText('ФИО:')).toHaveValue('hello');
  });

  userEvent.type(screen.getByLabelText('Дата рождения:'), '1999-05-01');
  await waitFor(() => {
    expect(screen.getByLabelText('Дата рождения:')).toHaveValue('1999-05-01');
  });

  userEvent.type(screen.getByLabelText('Ваша страна проживания:'), 'Russia');
  await waitFor(() => {
    expect(screen.getByLabelText('Ваша страна проживания:')).toHaveValue('Russia');
  });

  const checkbox = screen.getByLabelText(
    'Я согласен/согласна на обработку персональных данных'
  ) as HTMLInputElement;
  expect(checkbox.checked).toEqual(false);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);

  const switcher = screen.getByLabelText('switch') as HTMLInputElement;
  expect(switcher.checked).toEqual(false);
  fireEvent.click(switcher);
  expect(switcher.checked).toEqual(true);

  const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
  const inputFile = screen.getByLabelText('Загрузите фото') as HTMLInputElement;
  await act(async () => {
    await waitFor(() => {
      userEvent.upload(inputFile, fakeFile);
    });
  });
  expect(inputFile.files![0]).toStrictEqual(fakeFile);
});
