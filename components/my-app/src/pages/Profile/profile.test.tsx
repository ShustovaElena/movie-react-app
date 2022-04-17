import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Profile from './Profile';

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

  const switcher = screen.getByAltText('switch') as HTMLInputElement;
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

test('reset form', async () => {
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
  waitFor(() => {
    expect(screen.getByLabelText('ФИО:')).toBe('');
    expect(screen.getByLabelText('Дата рождения:')).toBe('');
    expect(screen.getByLabelText('Ваша страна проживания:')).toBe('');
    expect(screen.getByLabelText('Я согласен/согласна на обработку персональных данных')).toBe('');
    expect(screen.getByAltText('switch')).toBe('');
    expect(screen.getByLabelText('Загрузите фото')).toBe([]);
  });
});

test('check form with invalid data', async () => {
  render(<Profile />);
  userEvent.type(screen.getByLabelText('ФИО:'), 'И');
  userEvent.type(screen.getByLabelText('Дата рождения:'), '2020-05-01');
  userEvent.type(screen.getByLabelText('Ваша страна проживания:'), 'Russia');

  const checkbox = screen.getByLabelText(
    'Я согласен/согласна на обработку персональных данных'
  ) as HTMLInputElement;
  userEvent.click(checkbox);

  const switcher = screen.getByAltText('switch') as HTMLInputElement;
  userEvent.click(switcher);

  window.URL.createObjectURL = jest.fn();

  const fakeFile = new File(['hello'], 'hello.pdf', { type: 'image/pdg' });
  const inputFile = screen.getByLabelText('Загрузите фото') as HTMLInputElement;
  userEvent.upload(inputFile, fakeFile);

  const submit = screen.getByAltText('submit') as HTMLInputElement;
  userEvent.click(submit);
  waitFor(() => {
    expect(screen.getByText('Введите ФИО длиннее 6 символов')).toBeInTheDocument;
    expect(screen.getByText('Вам еще нет 18 лет!')).toBeInTheDocument;
    expect(screen.getByText('Добавьте файл .jpg, .jpeg, .png и менее 5mb')).toBeInTheDocument;
  });
});
