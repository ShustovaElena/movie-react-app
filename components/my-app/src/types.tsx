export type ICard = {
  key: number;
  src: string;
  name: string;
  year: string;
  genre: string;
  rating: string;
  likesCount: number;
};

export type IAge = {
  refAge: React.RefObject<HTMLInputElement>;
  className: string;
};

export type IFile = {
  refFile: React.RefObject<HTMLInputElement>;
  className: string;
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
  refName: React.RefObject<HTMLInputElement>;
  className: string;
};

export type ISelect = {
  refCountry: React.RefObject<HTMLSelectElement>;
};

export type IStock = {
  refStock: React.RefObject<HTMLInputElement>;
};

export type IUserData = {
  name: string;
  age: string;
  country: string;
  userInfo: string;
  stock: string;
  file: string;
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
  isValid: boolean;
  nameError: string;
};
