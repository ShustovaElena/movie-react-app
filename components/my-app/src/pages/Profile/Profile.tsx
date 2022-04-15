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
import { IStateForm, IUserData, IFormCard } from '../../types';
import {
  CURRENT_YEAR,
  RIGHT_ANSWER,
  WRONG_ANSWER_COLOR,
  VALID_AGE,
  MAX_SIZE_FILE,
  EXTENSIONS,
} from '../../constants';

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
    formState: { errors },
  } = useForm<IUserData>();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isUserData, setIsUserData] = useState(false);
  // const [isValidName, setIsValidName] = useState(true);
  // const [isValidAge, setIsValidAge] = useState(true);
  const [isValidFile, setIsValidFile] = useState(true);
  const [isShow, setIsShow] = useState(false);
  const [userFormData, setUserFormData] = useState(userFormDataInitial);
  const [userCards, setUserCards] = useState<IFormCard[]>([]);
  // const [errors, setErrors] = useState(errorInitial);

  // private nameField: React.RefObject<HTMLInputElement>;
  // private ageField: React.RefObject<HTMLInputElement>;
  // private countryField: React.RefObject<HTMLSelectElement>;
  // private userInfoField: React.RefObject<HTMLInputElement>;
  // private stockField: React.RefObject<HTMLInputElement>;
  // private fileField: React.RefObject<HTMLInputElement>;
  // private formField: React.RefObject<HTMLFormElement>;
  // private colorName: string;
  // private colorDate: string;
  // private colorFile: string;

  // constructor(props: Record<string, unknown>) {
  //   super(props);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.nameField = React.createRef();
  //   this.ageField = React.createRef();
  //   this.countryField = React.createRef();
  //   this.userInfoField = React.createRef();
  //   this.stockField = React.createRef();
  //   this.fileField = React.createRef();
  //   this.formField = React.createRef();
  //   this.colorName = RIGHT_ANSWER;
  //   this.colorDate = RIGHT_ANSWER;
  //   this.colorFile = RIGHT_ANSWER;
  //   this.state = {
  //     isDisabled: true,
  //     isUserData: false,
  //     isValidName: true,
  //     isValidAge: true,
  //     isValidFile: true,
  //     isShow: false,
  //     userFormData: {
  //       name: '',
  //       age: '',
  //       country: '',
  //       userInfo: 'Нет',
  //       stock: 'Нет',
  //       file: '',
  //     },
  //     userCards: [],
  //     errors: {
  //       name: 'Введите ФИО длиннее 6 символов',
  //       date: 'Вам еще нет 18 лет!',
  //       file: 'Добавьте файл .jpg, .jpeg, .png и менее 5mb',
  //     },
  //   };
  //   this.handleValidChange = this.handleValidChange.bind(this);
  //   this.onChange = this.onChange.bind(this);
  // }

  function onChange(e: React.FormEvent) {
    const target = e.target as HTMLFormElement;
    if (target) {
      setIsDisabled(false);
    }
  }

  // function handleValidChange() {
  //   if (
  //     (this.nameField.current?.value.length as number) <= 5 ||
  //     (this.nameField.current?.value as string) === ''
  //   ) {
  //     this.setState({ isValidName: false, isDisabled: true });
  //     this.colorName = WRONG_ANSWER;
  //     this.nameField.current!.value = '';
  //   } else {
  //     this.setState({ isValidName: true, isDisabled: false });
  //     this.colorName = RIGHT_ANSWER;
  //   }
  //   const currentDate = this.ageField.current?.value as string;
  //   const valueYear = Number(currentDate.split('-')[0]);
  //   if (CURRENT_YEAR - valueYear <= VALID_AGE || (this.ageField.current?.value as string) === '') {
  //     this.setState({ isValidAge: false, isDisabled: true });
  //     this.colorDate = WRONG_ANSWER;
  //     this.ageField.current!.value = '';
  //   } else {
  //     this.setState({ isValidAge: true, isDisabled: false });
  //     this.colorDate = RIGHT_ANSWER;
  //   }
  // const url = this.fileField.current!.files![0];
  // if (EXTENSIONS.some((elem: string) => url.name.endsWith(elem)) && url.size <= MAX_SIZE_FILE) {
  //   this.setState({ isValidFile: true, isDisabled: false });
  //   this.colorFile = RIGHT_ANSWER;
  // } else {
  //   this.setState({ isValidFile: false, isDisabled: true });
  //   this.colorFile = WRONG_ANSWER;
  // }
  // }

  function clearInput() {
    if (errors.name) {
      {
        reset({
          name: '',
        });
      }
    }
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
    // await this.handleValidChange();
    const USER_DATA: IFormCard = {
      name: data.name,
      age: data.age,
      country: data.country,
      userInfo: data.userInfo ? 'Да' : 'Нет',
      stock: data.stock ? 'Да' : 'Нет',
      file: URL.createObjectURL(data.file[0] as never),
    };

    // if (this.state.isValidName && this.state.isValidAge && this.state.isValidFile) {
    //   this.setState({
    setIsShow(true);
    setIsUserData(true);
    setIsDisabled(false);
    setUserFormData(USER_DATA);
    //   });

    const currentUserData = userCards;
    currentUserData.push(USER_DATA);
    setUserCards(currentUserData);

    // this.formField.current?.reset();
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
        <form
          className="Form"
          onSubmit={handleSubmit(onSubmit)}
          onChange={onChange}
          // ref={this.formField}
        >
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
          {/* <ValidationError nameError={this.state.errors.name} isValid={this.state.isValidName} /> */}
          <Age
            className={colorDate}
            register={register('age', {
              required: true,
              max: '2004',
            })}
            style={{ backgroundColor: errors.age && WRONG_ANSWER_COLOR }}
          />
          {errors.age && <ValidationError nameError={errorInitial.date} />}
          {/* <ValidationError nameError={this.state.errors.date} isValid={this.state.isValidAge} /> */}
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
          {isValidFile === false && <ValidationError nameError={errorInitial.file} />}
          {/* <ValidationError nameError={this.state.errors.file} isValid={this.state.isValidFile} /> */}

          <input
            className="submit"
            type="submit"
            value="Отправить"
            disabled={isDisabled}
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
