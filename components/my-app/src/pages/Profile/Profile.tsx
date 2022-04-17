import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Name from '../../components/Name/Name';
import Age from '../../components/Date/Date';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Switcher from '../../components/Switcher/Switcher';
import FileLoader from '../../components/FileLoader/FileLoader';
import FormCard from '../../components/FormCard/FormCard';
import ValidationError from '../../components/ValidationError/ValidationError';
import { IUserData, IFormCard } from '../../types';
import { RIGHT_ANSWER, WRONG_ANSWER_COLOR, MAX_SIZE_FILE, EXTENSIONS } from '../../constants';

import './Profile.css';

export default function Profile() {
  const userFormDataInitial = {
    name: '',
    age: '',
    country: '',
    userInfo: 'Нет',
    stock: 'Нет',
    file: {},
  };

  const errorInitial = {
    name: 'Введите ФИО длиннее 6 символов',
    date: 'Вам еще нет 18 лет!',
    file: 'Добавьте файл .jpg, .jpeg, .png и менее 5mb',
  };

  const colorName = RIGHT_ANSWER;
  const colorDate = RIGHT_ANSWER;
  const colorFile = RIGHT_ANSWER;

  const {
    register,
    handleSubmit,
    reset,
    resetField,
    formState: { errors, isDirty, isValid, isSubmitted },
    setValue,
  } = useForm<IUserData>();
  // const [isDisabled, setIsDisabled] = useState(true);
  const [isUserData, setIsUserData] = useState(false);
  // const [isValidName, setIsValidName] = useState(false);
  // const [isValidAge, setIsValidAge] = useState(true);
  const [isValidFile, setIsValidFile] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [userFormData, setUserFormData] = useState(userFormDataInitial);
  const [userCards, setUserCards] = useState<IFormCard[]>([]);

  function onClick() {
    // resetField('name');
    // console.log(!isDirty);
    // console.log(!isValid);
  }

  function onSubmit(data: IUserData) {
    console.log(data);
    console.log(URL.createObjectURL(data.file[0] as never));
    if (
      EXTENSIONS.some((elem: string) => data.file[0].name.endsWith(elem)) &&
      data.file[0].size <= MAX_SIZE_FILE
    ) {
      setIsValidFile(true);
    } else {
      setIsValidFile(false);
    }

    // e.preventDefault();
    const USER_DATA: IFormCard = {
      name: data.name,
      age: data.age,
      country: data.country,
      userInfo: data.userInfo ? 'Да' : 'Нет',
      stock: data.stock ? 'Да' : 'Нет',
      file: URL.createObjectURL(data.file[0] as never),
    };

    if (!errors.name && !errors.age && !errors.file) {
      setIsShow(true);
      setIsUserData(true);
      // setIsDisabled(false);
      setUserFormData(USER_DATA);
    } else {
      setIsShow(false);
      setIsUserData(false);
      // setIsDisabled(true);
    }

    // console.log(isDisabled);

    const currentUserData = userCards;
    currentUserData.push(USER_DATA);
    setUserCards(currentUserData);

    reset({
      name: '',
      age: '',
      country: '',
      userInfo: '',
      stock: '',
      file: [],
    });

    {
      setTimeout(() => {
        setIsShow(false);
      }, 1500);
    }
  }

  return (
    <>
      <div className="profile">
        <form className="Form" onSubmit={handleSubmit(onSubmit)} onClick={onClick}>
          <h2 className="header-part">Создайте свою учетную запись!</h2>
          <Name
            className={colorName}
            register={register('name', {
              required: true,
              minLength: 6,
            })}
            style={{ backgroundColor: errors.name && WRONG_ANSWER_COLOR }}
          />
          {errors.name && <ValidationError nameError={errorInitial.name} />}
          {errors.name && setValue('name', '', { shouldValidate: false })}
          <Age
            className={colorDate}
            register={register('age', {
              required: true,
              max: '2004',
            })}
            style={{ backgroundColor: errors.age && WRONG_ANSWER_COLOR }}
          />
          {errors.age && <ValidationError nameError={errorInitial.date} />}
          {errors.age && setValue('age', '', { shouldValidate: false })}
          <Select register={register('country')} />
          <Checkbox register={register('userInfo')} />
          <Switcher register={register('stock')} />
          <FileLoader
            className={colorFile}
            register={register('file', {
              required: true,
            })}
            style={{ backgroundColor: errors.file && WRONG_ANSWER_COLOR }}
          />
          {errors.file && <ValidationError nameError={errorInitial.file} />}
          {errors.file && setValue('file', [], { shouldValidate: false })}

          <input
            className="submit"
            type="submit"
            value="Отправить"
            disabled={!isDirty || (isSubmitted && !isValid)}
            alt="submit"
          />
        </form>
      </div>
      <div className="form-cards">
        {isUserData
          ? userCards.map((item: IFormCard, index: number) => <FormCard {...item} key={index} />)
          : ''}
      </div>
      {isShow ? <span className="modul-window">Данные успешно сохранены!</span> : ''}
    </>
  );
}
