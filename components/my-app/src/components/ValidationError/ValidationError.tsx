import * as React from 'react';
import { IValidationError } from '../../types';

export default function ValidationError(props: IValidationError) {
  return <>{<span className="error">{props.textError}</span>}</>;
}
