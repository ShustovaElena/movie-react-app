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
import { IUserData, IFormCard, FileType } from '../../types';
import {
  RIGHT_ANSWER,
  WRONG_ANSWER_COLOR,
  MAX_SIZE_FILE,
  EXTENSIONS,
  USER_FORM_DATA_INITIAL,
  ERRORS_INITIAL,
} from '../../constants';

import './Profile.css';

export default function Profile() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitted },
    setValue,
  } = useForm<IUserData>();
  const [isUserData, setIsUserData] = useState(false);
  const [isValidFile, setIsValidFile] = useState(true);
  const [isShowPopUp, setIsShowPopUp] = useState(false);
  const [userCards, setUserCards] = useState<IFormCard[]>([]);

  function onSubmit(data: IUserData) {
    // if (
    //   EXTENSIONS.some((elem: string) => data.file[0].name.endsWith(elem)) &&
    //   data.file[0].size <= MAX_SIZE_FILE
    // ) {
    //   setIsValidFile(true);
    // } else {
    //   setIsValidFile(false);
    // }

    const USER_DATA: IFormCard = {
      name: data.name,
      age: data.age,
      country: data.country,
      userInfo: data.userInfo ? 'Да' : 'Нет',
      stock: data.stock ? 'Да' : 'Нет',
      file: URL.createObjectURL(data.file[0] as never),
    };

    if (!errors.name && !errors.age && !errors.file) {
      setIsShowPopUp(true);
      setIsUserData(true);
    } else {
      setIsShowPopUp(false);
      setIsUserData(false);
    }

    userCards.push(USER_DATA);
    setUserCards(userCards);

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
              minLength: 6,
            })}
            style={{ backgroundColor: errors.name && WRONG_ANSWER_COLOR }}
          />
          {errors.name && <ValidationError nameError={ERRORS_INITIAL.name} />}
          {errors.name && setValue('name', '', { shouldValidate: false })}
          <Age
            className={RIGHT_ANSWER}
            register={register('age', {
              required: true,
              max: '2004',
            })}
            style={{ backgroundColor: errors.age && WRONG_ANSWER_COLOR }}
          />
          {errors.age && <ValidationError nameError={ERRORS_INITIAL.date} />}
          {errors.age && setValue('age', '', { shouldValidate: false })}
          <Select register={register('country')} />
          <Checkbox register={register('userInfo')} />
          <Switcher register={register('stock')} />
          <FileLoader
            className={RIGHT_ANSWER}
            errors={errors.file as never}
            data={userCards[userCards.length - 1].file[0] as unknown as FileType}
            // setValue={setValue('file', [], { shouldValidate: false })}
            register={register('file', {
              required: true,
            })}
            style={{ backgroundColor: errors.file && WRONG_ANSWER_COLOR }}
          />
          {/* {!isValidFile && <ValidationError nameError={ERRORS_INITIAL.file} />}
          {errors.file && setValue('file', [], { shouldValidate: false })} */}

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
        {isUserData &&
          userCards.map((item: IFormCard, index: number) => <FormCard {...item} key={index} />)}
      </div>
      {isShowPopUp ? <span className="modul-window">Данные успешно сохранены!</span> : ''}
    </>
  );
}
