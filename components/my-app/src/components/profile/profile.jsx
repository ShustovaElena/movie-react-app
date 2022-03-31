import * as React from 'react';
import Name from './name/name';
import Date from './date/date';
import Select from './select/select';
import Checkbox from './checkbox/checkbox';
import Switcher from './switcher/switcher';
import FileLoader from './fileLoader/file-loader';
import './profile.css';

// export interface IUserData {
//   userName: string;
//   date: string;
//   country: string;
//   personalDateAgree: boolean;
//   stockDataAgree: boolean;
//   img: string;
// }

// const userData: IUserData = {
//   userName: null,
//   date: null,
//   country: null,
//   personalDateAgree: true,
//   stockDataAgree: true,
//   img: null,
// };

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameField = React.createRef();
    this.ageField = React.createRef();
    this.state = { isDisabled: true };
  }

  handleSubmit(e) {
    e.preventDefault();
    const name = this.nameField.current.state.value;
    const age = this.ageField.current.state.value;
    if (this.nameField.current.state.valid && this.ageField.current.state.valid) {
      isDisabled = false;
      alert('Имя: ' + name + age);
    } else {
      isDisabled = true;
    }
  }

  render() {
    return (
      <div className="profile">
        <form className="Form" onSubmit={this.handleSubmit}>
          <h2 className="header-part">Создайте свою учетную запись!</h2>
          <Name value="" ref={this.nameField} />
          <Date value="" ref={this.ageField} />
          <Select />
          <Checkbox />
          <Switcher />
          <FileLoader />

          <input
            className="submit"
            type="submit"
            value="Отправить"
            disabled={this.state.isDisabled ? 'disabled' : ''}
          />
        </form>
      </div>
    );
  }
}
