import React from 'react';
import { IFile } from '../../types';

function FileLoader(props: IFile) {
  return (
    <label className="form-item file-loader">
      Загрузите фото
      <input className={props.className} type="file" accept=".jpg,.jpeg,.png" {...props.register} />
    </label>
  );
}

export default FileLoader;
