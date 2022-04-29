import { IValidationError } from '../../types';

export default function ValidationError({ textError }: IValidationError) {
  return <>{<span className="error">{textError}</span>}</>;
}
