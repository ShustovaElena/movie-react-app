import * as React from 'react';
import Name from '../../components/Name/Name';
import Date from '../../components/Date/Date';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Switcher from '../../components/Switcher/Switcher';
import FileLoader from '../../components/FileLoader/FileLoader';
import FormCard from '../../components/FormCard/FormCard';
import ValidationError from '../../components/ValidationError/ValidationError';
import { IStateForm, IUserData } from '../../types';
import {
  CURRENT_YEAR,
  RIGHT_ANSWER,
  WRONG_ANSWER,
  VALID_AGE,
  MAX_SIZE_FILE,
  EXTENSIONS,
} from '../../constants';

import './Profile.css';

export default class Profile extends React.Component<Record<string, unknown>, IStateForm> {
  private nameField: React.RefObject<HTMLInputElement>;
  private ageField: React.RefObject<HTMLInputElement>;
  private countryField: React.RefObject<HTMLSelectElement>;
  private userInfoField: React.RefObject<HTMLInputElement>;
  private stockField: React.RefObject<HTMLInputElement>;
  private fileField: React.RefObject<HTMLInputElement>;
  private formField: React.RefObject<HTMLFormElement>;
  private colorName: string;
  private colorDate: string;
  private colorFile: string;

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef();
    this.ageField = React.createRef();
    this.countryField = React.createRef();
    this.userInfoField = React.createRef();
    this.stockField = React.createRef();
    this.fileField = React.createRef();
    this.formField = React.createRef();
    this.colorName = RIGHT_ANSWER;
    this.colorDate = RIGHT_ANSWER;
    this.colorFile = RIGHT_ANSWER;
    this.state = {
      isDisabled: true,
      isUserData: false,
      isValidName: true,
      isValidAge: true,
      isValidFile: true,
      isShow: false,
      userFormData: {
        name: '',
        age: '',
        country: '',
        userInfo: 'Нет',
        stock: 'Нет',
        file: '',
      },
      userCards: [],
      errors: {
        name: 'Введите ФИО длиннее 6 символов',
        date: 'Вам еще нет 18 лет!',
        file: 'Добавьте файл .jpg, .jpeg, .png и менее 5mb',
      },
    };
    this.handleValidChange = this.handleValidChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e: React.FormEvent) {
    const target = e.target as HTMLFormElement;
    if (target) {
      this.setState({ isDisabled: false });
    }
  }

  async handleValidChange() {
    if (
      (this.nameField.current?.value.length as number) <= 5 ||
      (this.nameField.current?.value as string) === ''
    ) {
      this.setState({ isValidName: false, isDisabled: true });
      this.colorName = WRONG_ANSWER;
      this.nameField.current!.value = '';
    } else {
      this.setState({ isValidName: true, isDisabled: false });
      this.colorName = RIGHT_ANSWER;
    }
    const currentDate = this.ageField.current?.value as string;
    const valueYear = Number(currentDate.split('-')[0]);
    if (CURRENT_YEAR - valueYear <= VALID_AGE || (this.ageField.current?.value as string) === '') {
      this.setState({ isValidAge: false, isDisabled: true });
      this.colorDate = WRONG_ANSWER;
      this.ageField.current!.value = '';
    } else {
      this.setState({ isValidAge: true, isDisabled: false });
      this.colorDate = RIGHT_ANSWER;
    }
    const url = this.fileField.current!.files![0];
    if (EXTENSIONS.some((elem: string) => url.name.endsWith(elem)) && url.size <= MAX_SIZE_FILE) {
      this.setState({ isValidFile: true, isDisabled: false });
      this.colorFile = RIGHT_ANSWER;
    } else {
      this.setState({ isValidFile: false, isDisabled: true });
      this.colorFile = WRONG_ANSWER;
    }
  }

  async handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await this.handleValidChange();
    const USER_DATA: IUserData = {
      name: this.nameField.current?.value as string,
      age: this.ageField?.current?.value as string,
      country: this.countryField?.current?.value as string,
      userInfo: (this.userInfoField?.current?.checked as boolean) ? 'Да' : 'Нет',
      stock: (this.stockField?.current?.checked as boolean) ? 'Да' : 'Нет',
      file: URL.createObjectURL(this.fileField.current!.files![0]),
    };

    if (this.state.isValidName && this.state.isValidAge && this.state.isValidFile) {
      this.setState({
        isShow: true,
        isUserData: true,
        isDisabled: false,
        userFormData: USER_DATA,
      });

      const currentUserData = this.state.userCards;
      currentUserData.push(USER_DATA);
      this.setState({ userCards: currentUserData });

      this.formField.current?.reset();

      {
        setTimeout(() => {
          this.setState({ isShow: false });
        }, 1500);
      }
    }
  }

  render() {
    return (
      <>
        <div className="profile">
          <form
            className="Form"
            onSubmit={this.handleSubmit}
            onChange={this.onChange}
            ref={this.formField}
          >
            <h2 className="header-part">Создайте свою учетную запись!</h2>
            <Name className={this.colorName} refName={this.nameField} />
            <ValidationError nameError={this.state.errors.name} isValid={this.state.isValidName} />
            <Date className={this.colorDate} refAge={this.ageField} />
            <ValidationError nameError={this.state.errors.date} isValid={this.state.isValidAge} />
            <Select refCountry={this.countryField} />
            <Checkbox refUserInfo={this.userInfoField} />
            <Switcher refStock={this.stockField} />
            <FileLoader className={this.colorFile} refFile={this.fileField} />
            <ValidationError nameError={this.state.errors.file} isValid={this.state.isValidFile} />

            <input
              className="submit"
              type="submit"
              value="Отправить"
              disabled={this.state.isDisabled}
              alt="submit"
            />
          </form>
        </div>
        <div className="form-cards">
          {this.state.isUserData
            ? this.state.userCards.map((item: IUserData, index) => (
                <FormCard {...item} key={index} />
              ))
            : ''}
        </div>
        {this.state.isShow ? <span className="modul-window">Данные успешно сохранены!</span> : ''}
      </>
    );
  }
}
