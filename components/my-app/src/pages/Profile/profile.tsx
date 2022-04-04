import * as React from 'react';
import Name from '../../components/Name/Name';
import Date from '../../components/Date/Date';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Switcher from '../../components/Switcher/Switcher';
import FileLoader from '../../components/FileLoader/File-loader';
import FormCard from '../../components/Form-card/Form-card';
import './Profile.css';

interface IUserData {
  key: number;
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: string;
}

interface IStateForm {
  isDisabled: boolean;
  isUserData: boolean;
  isValidName: boolean;
  isValidAge: boolean;
  isValidFile: boolean;
  isShow: boolean;
  userFormData: IUserData;
}

export default class Profile extends React.Component<Record<string, unknown>, IStateForm> {
  private nameField: React.RefObject<HTMLInputElement>;
  private ageField: React.RefObject<HTMLInputElement>;
  private countryField: React.RefObject<HTMLSelectElement>;
  private userInfoField: React.RefObject<HTMLInputElement>;
  private stockField: React.RefObject<HTMLInputElement>;
  private fileField: React.RefObject<HTMLInputElement>;
  private formField: React.RefObject<HTMLFormElement>;
  private userCards: IUserData[];
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
    this.colorName = 'white';
    this.colorDate = 'white';
    this.colorFile = 'white';
    this.state = {
      isDisabled: true,
      isUserData: false,
      isValidName: false,
      isValidAge: false,
      isValidFile: false,
      isShow: false,
      userFormData: {
        key: 0,
        name: '',
        age: '',
        country: '',
        userInfo: 'Нет',
        stock: 'Нет',
        file: '',
      },
    };
    this.handleValidChange = this.handleValidChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.userCards = [];
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
      this.colorName = 'rgba(255, 0, 0, 0.2)';
      this.nameField.current!.value = '';
    } else {
      this.setState({ isValidName: true, isDisabled: false });
      this.colorName = 'white';
    }
    console.log(this.nameField.current?.value);
    console.log(this.state.isUserData);

    const currentDate = this.ageField.current?.value as string;
    const currentYear = 2022;
    const valueYear = Number(currentDate.split('-')[0]);
    if (currentYear - valueYear <= 18 || (this.ageField.current?.value as string) === '') {
      this.setState({ isValidAge: false, isDisabled: true });
      this.colorDate = 'rgba(255, 0, 0, 0.2)';
      this.ageField.current!.value = '';
    } else {
      this.setState({ isValidAge: true, isDisabled: false });
      this.colorDate = 'white';
    }

    const url = this.fileField.current!.files![0];
    const maxSize = 5242880;
    if (
      (url.name.split('.')[1] === 'jpg' ||
        url.name.split('.')[1] === 'jpeg' ||
        url.name.split('.')[1] === 'png') &&
      url.size <= maxSize
    ) {
      this.setState({ isValidFile: true, isDisabled: false });
      this.colorFile = 'white';
    } else {
      this.setState({ isValidFile: false, isDisabled: true });
      this.colorFile = 'rgba(255, 0, 0, 0.2)';
    }
  }

  async handleSubmit(e: React.FormEvent) {
    await this.handleValidChange();
    e.preventDefault();
    const USER_DATA: IUserData = {
      key: 1,
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

      this.userCards.push(USER_DATA);
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
            <Name style={this.colorName} refName={this.nameField} />
            {this.state.isValidName ? (
              ''
            ) : (
              <span className="error">Введите ФИО длиннее 6 символов</span>
            )}
            <Date style={this.colorDate} refAge={this.ageField} />
            {this.state.isValidAge ? '' : <span className="error">Вам еще нет 18 лет!</span>}
            <Select refCountry={this.countryField} />
            <Checkbox refUserInfo={this.userInfoField} />
            <Switcher refStock={this.stockField} />
            <FileLoader style={this.colorFile} refFile={this.fileField} />
            {this.state.isValidFile ? (
              ''
            ) : (
              <span className="error">Добавьте файл .jpg, .jpeg, .png и менее 5mb</span>
            )}

            <input
              className="submit"
              type="submit"
              value="Отправить"
              disabled={this.state.isDisabled}
              data-TestId="submit"
            />
          </form>
        </div>
        <div className="form-cards">
          {this.state.isUserData
            ? this.userCards.map((item: IUserData, index) => <FormCard {...item} key={index} />)
            : ''}
        </div>
        {this.state.isShow ? <span className="modul-window">Данные успешно сохранены!</span> : ''}
      </>
    );
  }
}
