import * as React from 'react';
import './Form-card.css';

interface IFormCard {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: string;
}

export default class FormCard extends React.Component<IFormCard> {
  constructor(props: IFormCard) {
    super(props);
  }

  render() {
    const { name, age, country, userInfo, stock, file } = this.props;
    return (
      <div className="form-card">
        <p className="card-header">Ваш профиль</p>
        <p>Фио: {name}</p>
        <p>Возраст: {age}</p>
        <p>Страна проживания: {country}</p>
        <p>Согласен/на на обработку персональных данных: {userInfo}</p>
        <p>Получать уведомления об акциях: {stock}</p>
        <img className="load-img" src={file} alt="User photo" />
      </div>
    );
  }
}
