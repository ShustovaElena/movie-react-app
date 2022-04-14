import * as React from 'react';
import { IFormCard } from '../../types';

import './FormCard.css';

export default function FormCard(props: IFormCard) {
  const { name, age, country, userInfo, stock, file } = props;
  return (
    <div className="form-card">
      <p className="card-header">Ваш профиль</p>
      <p>Фио: {name}</p>
      <p>Возраст: {age}</p>
      <p>Страна проживания: {country}</p>
      <p>Согласен/на на обработку персональных данных: {userInfo}</p>
      <p>Получать уведомления об акциях: {stock}</p>
      <div className="wrapper-img">
        <img className="load-img" src={file} alt="User photo" />
      </div>
    </div>
  );
}
