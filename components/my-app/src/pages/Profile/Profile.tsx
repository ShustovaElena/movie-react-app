import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Name from '../../components/Name/Name';
import Age from '../../components/Date/Date';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Switcher from '../../components/Switcher/Switcher';
import FileLoader from '../../components/FileLoader/FileLoader';
import FormCard from '../../components/FormCard/FormCard';
import { IUserData, IFormCard, FileType } from '../../types';
import { RIGHT_ANSWER, WRONG_ANSWER_COLOR, MAX_SIZE_FILE, EXTENSIONS } from '../../constants';

import './Profile.css';

export default function Profile() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<IUserData>();
  const [isUserData, setIsUserData] = useState(false);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [userCards, setUserCards] = useState<IFormCard[]>([]);

  function validationFile(file: FileType[]) {
    if (
      EXTENSIONS.some((elem: string) => file[0].name.endsWith(elem)) &&
      file[0].size <= MAX_SIZE_FILE
    ) {
      return true;
    } else {
      return 'Добавьте файл .jpg, .jpeg, .png и менее 5mb';
    }
  }

  function onSubmit(data: IUserData) {
    const USER_DATA: IFormCard = {
      name: data.name,
      age: data.age,
      country: data.country,
      userInfo: data.userInfo ? 'Да' : 'Нет',
      stock: data.stock ? 'Да' : 'Нет',
      file: URL.createObjectURL(data.file[0] as never),
    };

    console.log(USER_DATA.file);

    if (!errors.name && !errors.age && !errors.file) {
      setIsShowPopUp(true);
      setIsUserData(true);
    } else {
      setIsShowPopUp(false);
      setIsUserData(false);
    }

    userCards.push(USER_DATA);
    setUserCards(userCards);

    reset();

    {
      setTimeout(() => {
        setIsShowPopUp(false);
      }, 1500);
    }
  }

  return (
    <>
      <div className="profile">
        <form className="Form" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="header-part">Создайте свою учетную запись!</h2>
          <Name
            className={RIGHT_ANSWER}
            register={register('name', {
              required: true,
              minLength: { value: 6, message: 'Введите ФИО длиннее 6 символов' },
            })}
            style={{ backgroundColor: errors.name && WRONG_ANSWER_COLOR }}
            error={errors.name?.message}
          />
          {/* {errors.name && setValue('name', '', { shouldValidate: false })} */}
          <Age
            className={RIGHT_ANSWER}
            register={register('age', {
              required: true,
              max: { value: '2004', message: 'Вам еще нет 18 лет!' },
            })}
            style={{ backgroundColor: errors.age && WRONG_ANSWER_COLOR }}
            error={errors.age?.message}
          />
          {/* {errors.age && setValue('age', '', { shouldValidate: false })} */}
          <Select register={register('country')} />
          <Checkbox register={register('userInfo')} />
          <Switcher register={register('stock')} />
          <FileLoader
            className={RIGHT_ANSWER}
            register={register('file', {
              required: true,
              validate: (file) => validationFile(file),
            })}
            style={{ backgroundColor: errors.file && WRONG_ANSWER_COLOR }}
            error={errors.file}
          />
          {/* {errors.file && setValue('file', [], { shouldValidate: false })} */}

          <input
            className="submit"
            type="submit"
            value="Отправить"
            disabled={!isDirty}
            alt="submit"
          />
        </form>
      </div>
      <div className="form-cards">
        {isUserData &&
          userCards.map((item: IFormCard, index: number) => <FormCard {...item} key={index} />)}
      </div>
      {isShowPopUp ? <span className="modul-window">Данные успешно сохранены!</span> : ''}
    </>
  );
}
