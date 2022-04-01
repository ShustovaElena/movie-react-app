import * as React from 'react';
import Name from '../../components/Name/Name';
import Date from '../../components/Date/Date';
import Select from '../../components/Select/Select';
import Checkbox from '../../components/Checkbox/Checkbox';
import Switcher from '../../components/Switcher/switcher';
import FileLoader from '../../components/FileLoader/File-loader';
import FormCard from '../../components/Form-card/Form-card';
import './profile.css';

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
}

export default class Profile extends React.Component<Record<string, unknown>, IStateForm> {
  private nameField: React.RefObject<Name>;
  private ageField: React.RefObject<Date>;
  private countryField: React.RefObject<Select>;
  private userInfoField: React.RefObject<Checkbox>;
  private stockField: React.RefObject<Switcher>;
  private fileField: React.RefObject<FileLoader>;
  private userFormData: IUserData;
  private userCards: IUserData[];

  constructor(props: Record<string, unknown>) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef();
    this.ageField = React.createRef();
    this.countryField = React.createRef();
    this.userInfoField = React.createRef();
    this.stockField = React.createRef();
    this.fileField = React.createRef();
    this.state = { isDisabled: true, isUserData: false };
    this.userFormData = {
      key: 1,
      name: '',
      age: '',
      country: '',
      userInfo: 'Нет',
      stock: 'Нет',
      file: '',
    };
    this.handleValidChange = this.handleValidChange.bind(this);
    this.userCards = [];
  }

  handleValidChange() {
    if (
      this.nameField.current?.state.valid &&
      this.ageField.current?.state.valid &&
      this.userInfoField.current?.state.isChecked
    ) {
      this.setState({ isDisabled: false });
      this.userFormData.userInfo = 'Да';
      this.userFormData.stock = 'Да';
    } else {
      this.setState({ isDisabled: true });
      this.userFormData.userInfo = 'Нет';
      this.userFormData.stock = 'Нет';
    }
  }

  handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const name = this.nameField.current?.state.value as string;
    const age = this.ageField?.current?.state.value as string;
    const country = this.countryField?.current?.state.value as string;
    const file = this.fileField?.current?.state.image as string;

    this.userFormData.name = name;
    this.userFormData.age = age;
    this.userFormData.country = country;
    this.userFormData.file = file;

    if (
      this.nameField.current?.state.valid &&
      this.ageField.current?.state.valid &&
      this.countryField.current?.state.value &&
      this.userInfoField.current?.state.isChecked &&
      this.stockField.current?.state.isChecked &&
      this.fileField.current?.state.image
    ) {
      this.setState({ isUserData: true });
      this.userCards.push(this.userFormData);
    } else {
      this.setState({ isUserData: false });
    }
  }

  render() {
    return (
      <>
        <div className="profile">
          <form className="Form" onSubmit={this.handleSubmit}>
            <h2 className="header-part">Создайте свою учетную запись!</h2>
            <Name value="" ref={this.nameField} onValidChange={this.handleValidChange} />
            <Date value="" ref={this.ageField} onValidChange={this.handleValidChange} />
            <Select value="Russia" ref={this.countryField} onValidChange={this.handleValidChange} />
            <Checkbox ref={this.userInfoField} onValidChange={this.handleValidChange} />
            <Switcher ref={this.stockField} onValidChange={this.handleValidChange} />
            <FileLoader ref={this.fileField} />

            <input
              className="submit"
              type="submit"
              value="Отправить"
              disabled={this.state.isDisabled ? true : false}
            />
          </form>
        </div>
        <div className="form-cards">
          {this.state.isUserData
            ? this.userCards.map((item: IUserData, index) => <FormCard {...item} key={index} />)
            : ''}
        </div>
      </>
    );
  }
}
