import React from 'react';
import { FieldError } from 'react-hook-form';

export type ICard = {
  id: number | undefined;
  title: string | undefined;
  poster_path: string | undefined;
  overview: string | undefined;
  popularity: number | undefined;
  release_date: string | undefined;
  vote_average: number | undefined;
  vote_count: number | undefined;
};

export type IAge = {
  // refAge: React.RefObject<HTMLInputElement>;
  className: string;
  register: object;
  style: object;
};

export type IFile = {
  // refFile: React.RefObject<HTMLInputElement>;
  className: string;
  register: object;
  style: object;
  // errors: {
  //   lastModified?: FieldError | undefined;
  //   lastModifiedDate?: FieldError | undefined;
  //   name?: FieldError | undefined;
  //   size?: FieldError | undefined;
  //   type?: FieldError | undefined;
  //   webkitRelativePath?: FieldError | undefined;
  // }[];
  // setValue: void;
  // data: FileType;
};

export type IFormCard = {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: string;
};

export type IName = {
  // refName: React.RefObject<HTMLInputElement>;
  className: string;
  register: object;
  style: object;
};

export type ISelect = {
  // refCountry: React.RefObject<HTMLSelectElement>;
  register: object;
};

export type IStock = {
  // refStock: React.RefObject<HTMLInputElement>;
  register: object;
};

export type IUserInfo = {
  // refStock: React.RefObject<HTMLInputElement>;
  register: object;
};

export type FileType = {
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
};

export type IUserData = {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: FileType[];
};

export type IStateForm = {
  isDisabled: boolean;
  isUserData: boolean;
  isValidName: boolean;
  isValidAge: boolean;
  isValidFile: boolean;
  isShow: boolean;
  userFormData: IUserData;
  userCards: IUserData[];
  errors: IError;
};

export type IError = {
  name: string;
  date: string;
  file: string;
};

export type IValidationError = {
  nameError: string;
};

export type IStorageProps = {
  userInput: string;
  setDataFromApi: (searchData: ICard[]) => void;
  pressSubmit: () => void;
};

export type IStorageState = {
  searchQuery: string;
};

export type ICards = {
  data: ICard[];
};

export type IUserSelect = {
  userSelect: ICard;
  isClosedModul: boolean;
};

export type IModalWinProps = {
  data: ICard;
  onClick: (e: React.FormEvent) => void;
  onClickOverlay: (e: React.FormEvent) => void;
};

export type IHome = {
  data: ICard[];
  isPressSearch: boolean;
};

export type ICardImage = {
  className: string;
  poster_path: string | undefined;
  IMG_URL: string;
  alt: string;
};
