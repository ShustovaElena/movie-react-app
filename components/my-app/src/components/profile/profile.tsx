import * as React from 'react';
import Name from './name/name';
import Date from './date/date';
import Select from './select/select';
import Checkbox from './checkbox/checkbox';
import Switcher from './switcher/switcher';
import FileLoader from './fileLoader/file-loader';
import './profile.css';

export default class Profile extends React.Component {
  //   inputName: React.RefObject<HTMLInputElement>;
  //   inputDate: React.RefObject<HTMLInputElement>;
  //   select: React.RefObject<HTMLSelectElement>;
  //   checkbox: React.RefObject<HTMLInputElement>;

  constructor(props: object) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.inputName = React.createRef();
    // this.inputDate = React.createRef();
    // this.select = React.createRef();
    // this.checkbox = React.createRef();
  }

  handleSubmit(event: React.FormEvent) {
    // alert('Отправленное имя: ' + this.inputName.current?.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="profile">
        <form className="Form" onSubmit={this.handleSubmit}>
          <h2 className="header-part">Создайте свою учетную запись!</h2>
          <Name />
          <Date />
          <Select />
          <Checkbox />
          <Switcher />
          <FileLoader />

          <input className="submit" type="submit" value="Отправить" />
        </form>
      </div>
    );
  }
}
