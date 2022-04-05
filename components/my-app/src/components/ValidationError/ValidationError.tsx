import * as React from 'react';
import { IValidationError } from '../../types';

export default class ValidationError extends React.Component<IValidationError> {
  constructor(props: IValidationError) {
    super(props);
  }

  render() {
    return this.props.isValid ? '' : <span className="error">{this.props.nameError}</span>;
  }
}
