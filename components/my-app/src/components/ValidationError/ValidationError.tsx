import * as React from 'react';
import { IValidationError } from '../../types';

export default function ValidationError(props: IValidationError) {
  return props.isValid ? <>{''}</> : <>{<span className="error">{props.nameError}</span>}</>;
}
