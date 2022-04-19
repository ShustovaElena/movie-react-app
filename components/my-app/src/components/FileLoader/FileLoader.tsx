import { IFile } from '../../types';
import ValidationError from '../ValidationError/ValidationError';

function FileLoader(props: IFile) {
  const { className, register, style, error } = props;

  return (
    <>
      <label className="form-item file-loader">
        Загрузите фото
        <input
          className={className}
          type="file"
          accept=".jpg,.jpeg,.png"
          {...register}
          style={style}
        />
      </label>
      {error && <ValidationError textError={'Добавьте файл .jpg, .jpeg, .png и менее 5mb'} />}
    </>
  );
}

export default FileLoader;
